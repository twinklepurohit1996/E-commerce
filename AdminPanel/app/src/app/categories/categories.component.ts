 import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelAuthService } from 'app/services/admin-panel-auth.service';
import { CategoriesService } from 'app/services/categories.service';
import { UserService } from 'app/validation/user.service';
import { ToastrService } from 'ngx-toastr';

import { Confirm, Notify } from 'notiflix';
declare var $:any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  submitted = false;
  file: any;
  cateInfo: any;
  roleDrop:any;
  isAdd: boolean;
  id: string;
  constructor(
    private customValidator: UserService,
    private router: Router,
    private categoriesService: CategoriesService,
    private toastr: ToastrService) {}
  ngOnInit()
  {
    this.showCategoriesList();
    this.categoriesService.isAdd.subscribe((data) => {
      this.isAdd = data
    })
  }

  public validationMessages = {
    'cate_name': [
      { type: 'required', message: 'Categories Name is required' },
      {type: 'pattern', message: 'Please Enter a valid Categories Name is required'}
    ],
    'file': [{ type: 'required', message: 'Image is required' }]

  };

  addCategoriesForm = new FormGroup({
    cate_name: new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z]+$')]),
    file: new FormControl('', [Validators.required])
  });
  //Image Upload Event function
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onAdd(){
    this.categoriesService.isAdd.next(true)
  }
  onReset() {
    this.addCategoriesForm.reset();
    this.submitted = false;
  }

  // Add + Edit Model Form default function
  public addEditCategories() {
    console.log(this.addCategoriesForm.value);
    this.submitted = true;
    if (this.addCategoriesForm?.invalid) {
      return
    }
    if (this.isAdd) {
      console.log("Add");
      this.categoriesAdd()
    } else {
      console.log("Update");
      this.userCategories();
    }
  }

  //Add User Function
  categoriesAdd() {
    console.log(this.addCategoriesForm.value);
    const data = this.addCategoriesForm.value;
    const fd = new FormData();
    fd.append('file', this.file, this.file.name);
    fd.append('cate_name', data.cate_name);
    console.log(fd);
    this.categoriesService.newCate(fd).then((result: any) => {
      console.log(result);
      if (result.status == 200) {
        console.log("Hellllo")
        this.toastr.success('Success', result.message);
        this.submitted = false;
        this.addCategoriesForm.reset();
        $('#exampleModal').modal('hide')
        this.showCategoriesList()
        this.router.navigateByUrl('/categories');
      }
      else if (result.status == 400) {
        this.toastr.info('Warning', result.message);
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
    this.categoriesService.isAdd.next(false)
    if (!this.isAdd) {
      this.addCategoriesForm.get('file').clearValidators();
      this.addCategoriesForm.get('file').updateValueAndValidity();
      this.categoriesService.EditCate(this.id).then((data) => {
        const EditCategories = {
          cate_name: data['data']['cate_name']
        }
        this.addCategoriesForm.patchValue(EditCategories)
      })
    }
  }

  //User Data Update Function
  userCategories() {
    const data = this.addCategoriesForm.value;
    const fd = new FormData();
    fd.append('file', this.file);
    fd.append('cate_name', data.cate_name);
    this.categoriesService.updateCategories(fd, this.id).then((result: any) => {
      if (result.status == 200) {
        console.log("output" + result);
        this.toastr.success('Success', result.message);
        $('#exampleModal').modal('hide')
        this.showCategoriesList()
        this.router.navigateByUrl('/categories');
        this.submitted = false;
      }
    }).catch(err => {
      this.toastr.error('Error!', 'Toastr fanger!');
      console.log(err)
    });
  }

//User List Display Function
  showCategoriesList() {
    this.categoriesService.CategoriesList().then((result: any) => {
      this.cateInfo = result.data;
      this.cateInfo.map((e: any) => {
        e['file'] = e.file ? `http://localhost:5000/image/cateImage/${e.file}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
      });

    }).catch(err => {
      console.log(err)
    })
  }

//Delete Categories Function
  deleteCate(_id: string) {
    console.log("Hello");
    Confirm.show(
      'Delete',
      'Do you want to delete this User?',
      'Yes',
      'No',
      () => {
        this.categoriesService.deleteCategories(_id).then((data: any) => {
          console.log(data);
          if (data.status === 200) {
            Notify.success(data.message, {
              position: 'center-top'
            });
            this.showCategoriesList();
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
