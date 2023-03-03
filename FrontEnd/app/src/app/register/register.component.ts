import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../validation/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted=false;
  file: any;

  constructor(private customValidator:UserService,private router: Router, private toastr: ToastrService,    
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  userRegister = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      // password: new FormControl('', [Validators.required, Validators.compose([Validators.required, this.customValidator.patternValidator()])]),
      confirmPassword: new FormControl('', [Validators.required]),
      xgen: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      mob: new FormControl('', [Validators.required]),
      // role: new FormControl(null, [Validators.required]),
      // mob: new FormControl('', [Validators.required,confirmPassword , Validators.compose([Validators.required, this.customValidator.patternValidatormob()])])
    }, [
    // this.customValidator.MatchPassword('password', 'confirmPassword')
  ]);

  public validationMessages = {
    'name': [{ type: 'required', message: 'First Name is required' }],
    'email': [{ type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email address' }],
    'mob': [{ type: 'required', message: 'Mobile Number is required' },
      // { type: 'invalidmob', message: 'Please enter a valid mobile number' },
      // { type: 'minlength', message: 'Mobile Number minlength is 10' },
      // { type: 'maxlength', message: 'Mobile Number maxlength is 10' }
    ],
    'dob': [{ type: 'required', message: 'Date of Birth is required' }],
    'password': [{ type: 'required', message: 'Password is required' },
      { type: 'invalidPassword', message: ' Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number' }],
    'confirmPassword': [{ type: 'required', message: 'Confirm Password is required' },
      { type: 'passwordMismatch', message: 'Password not Match' }],
    'xgen': [{ type: 'required', message: 'Gender is required' }],
    'address': [{ type: 'required', message: 'Address is required' }],
    // 'role': [{ type: 'required', message: 'User Role is required' }],
    'file': [{ type: 'required', message: 'Image is required' }]
  }

    //Image Upload Event function
    onFileSelected(event: any) {
      this.file = event.target.files[0];
    }

  addUser(){
    this.submitted=true;
    console.log(this.userRegister.value);
    const data:any = this.userRegister.value;
    console.log(data);
    const fd = new FormData();
    fd.append('file', this.file);
    fd.append('email', data.email);
    fd.append('password', data.password);
    fd.append('confirmPassword', data.confirmPassword);
    fd.append('name', data.name);
    fd.append('xgen', data.xgen);
    fd.append('dob', data.dob);
    fd.append('address', data.address);
    fd.append('mob', data.mob);
    console.log(fd);
    this.authService.registration(fd).then((result: any) => {
      console.log(result);
      if (result.status == 200) {
        console.log("Hellllo")
        this.toastr.success('Success', result.message);
        this.submitted = false;
        // this.userRegister.reset();
        // $('#exampleModal').modal('hide')
        // this.showUserList()
        this.router.navigateByUrl('/login');
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
    }).catch((err: any) => {
      alert("Error Data")
      console.log(err)
    })

  }

}
