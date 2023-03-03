import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelAuthService } from 'app/services/admin-panel-auth.service';
import { UserService } from 'app/validation/user.service';
import { ToastrService } from 'ngx-toastr';

import { Confirm, Notify } from 'notiflix';
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  submitted = false;
  file: any;
  userInfo: any;
  roleDrop:any;
  isAdd: boolean;
  id: string;
  constructor(
    private customValidator: UserService,
    private router: Router,
    private authService: AdminPanelAuthService,
    private toastr: ToastrService) {}
  ngOnInit()
  {
    this.showUserList();
    this.authService.isAdd.subscribe((data) => {
      this.isAdd = data
    })
  }

  public validationMessages = {
    'name': [{ type: 'required', message: 'First Name is required' }],
    'email': [{ type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email address' }],
    'mob': [{ type: 'required', message: 'Mobile Number is required' },
      { type: 'invalidmob', message: 'Please enter a valid mobile number' },
      { type: 'minlength', message: 'Mobile Number minlength is 10' },
      { type: 'maxlength', message: 'Mobile Number maxlength is 10' }],
    'dob': [{ type: 'required', message: 'Date of Birth is required' }],
    'password': [{ type: 'required', message: 'Password is required' },
      { type: 'invalidPassword', message: ' Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number' }],
    'confirmPassword': [{ type: 'required', message: 'Confirm Password is required' },
      { type: 'passwordMismatch', message: 'Password not Match' }],
    'xgen': [{ type: 'required', message: 'Gender is required' }],
    'address': [{ type: 'required', message: 'Address is required' }],
    'role': [{ type: 'required', message: 'User Role is required' }],
    'file': [{ type: 'required', message: 'Image is required' }]
  };
  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.compose([Validators.required, this.customValidator.patternValidator()])]),
      confirmPassword: new FormControl('', [Validators.required]),
      xgen: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      mob: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), , Validators.compose([Validators.required, this.customValidator.patternValidatormob()])])
    }, [
    this.customValidator.MatchPassword('password', 'confirmPassword')
  ]);

  //Image Upload Event function
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onReset() {
    this.registerForm.reset();
    this.submitted = false;
  }

  //Add + Edit Model Form default function
  public addEditUser() {
    this.submitted = true;
    if (this.registerForm?.invalid) {
      return
    }
    if (this.isAdd) {

      console.log("Add");
      this.userAdd()
    } else {
      console.log("Update");
      this.userUpdate();
    }
  }

  onAdd(){
    this.authService.isAdd.next(true)
  }
  //Add User Function
  userAdd() {
    const data = this.registerForm.value;
    console.log(this.registerForm.value)
    const fd = new FormData();
    fd.append('file', this.file, this.file.name);
    fd.append('email', data.email);
    fd.append('password', data.password);
    fd.append('confirmPassword', data.confirmPassword);
    fd.append('name', data.name);
    fd.append('xgen', data.xgen);
    fd.append('dob', data.dob);
    fd.append('address', data.address);
    fd.append('role', data.role);
    fd.append('mob', data.mob);
    console.log(fd);
    this.authService.registration(fd).then((result: any) => {
      console.log(result);
      if (result.status == 200) {
        console.log("Hellllo")
        this.toastr.success('Success', result.message);
        this.submitted = false;
        this.registerForm.reset();
        $('#exampleModal').modal('hide')
        this.showUserList()
        this.router.navigateByUrl('/dashboard');
      }
      else if (result.status == 400) {
        this.toastr.info('Warning', result.message);
      }
      else if (result.status == 401) {
        this.toastr.warning('Password Matching', result.message);
      }
      else {
        this.toastr.error('Error', result.message);
      }
    }).catch(err => {
      alert("Error Data")
      console.log(err)
    })
  }

  //User data (get)picked for edit function
  onEdit(id: any) {
    this.id = id;
    this.authService.isAdd.next(false)
    if (!this.isAdd) {
      this.registerForm.get('password').clearValidators();
      this.registerForm.get('password').updateValueAndValidity();
      
      this.registerForm.get('confirmPassword').clearValidators();
      this.registerForm.get('confirmPassword').updateValueAndValidity();

      this.registerForm.get('file').clearValidators();
      this.registerForm.get('file').updateValueAndValidity();
      this.authService.EditUser(this.id).then((data) => {
        const change = new Date(data['data']['dob']).toISOString().split("T")[0];
        const Edituser = {
          name: data['data']['name'],
          email: data['data']['email'],
          mob: data['data']['mob'],
          dob: change,
          xgen: data['data']['xgen'],
          address: data['data']['address'],
          role: data['data']['role']
        }
        this.registerForm.patchValue(Edituser)
      })
    }
  }

  //User Data Update Function
  userUpdate() {
    const data = this.registerForm.value;
    const fd = new FormData();
    fd.append('file', this.file);
    fd.append('email', data.email);
    fd.append('password', data.password);
    fd.append('name', data.name);
    fd.append('xgen', data.xgen);
    fd.append('dob', data.dob);
    fd.append('address', data.address);
    fd.append('role', data.role);
    fd.append('mob', data.mob);
    
    this.authService.updateUser(fd, this.id).then((result: any) => {
      if (result.status == 200) {

        console.log("output" + result);
        this.toastr.success('Success', result.message);
        $('#exampleModal').modal('hide')
        this.showUserList()
        this.router.navigateByUrl('/dashboard');
        this.submitted = false;
      }
    }).catch(err => {
      this.toastr.error('Error!', 'Toastr fanger!');
      console.log(err)
    });
  }

//User List Display Function
  showUserList() {
    this.authService.userList().then((result: any) => {
      this.userInfo = result.data;
      this.userInfo.map((e: any) => {
        e['file'] = e.file ? `http://localhost:5000/image/userImage/${e.file}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
        e["dob"] = new Date(e.dob).toLocaleDateString();
      });

    }).catch(err => {
      console.log(err)
    })
  }

//Delete User Function
  deleteUser(_id: string) {
    Confirm.show(
      'Delete',
      'Do you want to delete this User?',
      'Yes',
      'No',
      () => {
        this.authService.deleteUser(_id).then((data: any) => {
          if (data.status === 200) {
            Notify.success(data.message, {
              position: 'center-top'
            });
            this.showUserList();
          }
          else {
            Notify.warning(data.message, {
              position: 'center-top'
            });
          }
        })
      },
      () => {
        Notify.info("Not Deleted", {
          position: 'center-top'
        });
      },
      {
      },
    );
  }


}
