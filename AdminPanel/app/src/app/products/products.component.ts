import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelAuthService } from 'app/services/admin-panel-auth.service';
import { CategoriesService } from 'app/services/categories.service';
import { ProductsService } from 'app/services/products.service';
import { UserService } from 'app/validation/user.service';
import { ToastrService } from 'ngx-toastr';
import { Confirm, Notify } from 'notiflix';
declare var $:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    submitted = false;
    file: any;
    cateInfo: any;
    roleDrop:any;
    isAdd: boolean=true;
    id: string;
    cateData:any;
    productInfo:any;
    
    constructor(
      private customValidator: UserService,
      private router: Router,
      private productsService: ProductsService,
      private categoriesService : CategoriesService,
      private toastr: ToastrService) {}
    ngOnInit()
    {
      this.showProductList();
    this.showCategoriesDropdown();
      // this.productsService.isAdd.subscribe((data) => {
      //   this.isAdd = data;
      // })
    }
  
    
    public validationMessages = {
      'product_name': [
        { type: 'required', message: 'Product Name is required' },
      ],
      'cate_Id': [
        { type: 'required', message: 'Categories Name is required' },
      ]
      ,'description': [
        { type: 'required', message: 'Description is required' },
      ],
      'price': [
        { type: 'required', message: 'Price is required' },
      ],
      'size': [
        { type: 'required', message: 'Size is required' },
      ],
      'file': [
        { type: 'required', message: 'Image is required' },
      ],
  
    };
  
    addProductForm = new FormGroup({
        product_name: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
        cate_Id: new FormControl(null,[Validators.required]),
        size: new FormControl('',[Validators.required]),
        price: new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z]+$')]),
        file: new FormControl('', [Validators.required])
    });

    //Image Upload Event function
    onFileSelected(event: any) {
      this.file = event.target.files[0];
    }
  
    
    onAdd(){
      this.isAdd=true;
      // this.productsService.isAdd.next(true)
    }
    onReset() {
      this.addProductForm.reset();
      this.submitted = false;
    }
  
    // Add + Edit Model Form default function
    public addEditProduct() {
      console.log('onsubmit'+this.isAdd)
      console.log(this.addProductForm.value);
      this.submitted = true;
      // if (this.addProductForm?.invalid) {
      //   return
      // }
      
      if (this.isAdd) {
        console.log("hello2");
        console.log("Add");
        this.productAdd()
      } else {
        console.log("Update");
        console.log("hello3");
        this.productUpdate();
      }
    }
  
    showCategoriesDropdown(){
        this.productsService.cateDrop().then((result:any)=>{
            console.log(result);
            this.cateData=result.data;
          }).catch(err=>{
            console.log(err)
          });
    }
    
    //Add User Function
    productAdd() {
      console.log(this.addProductForm.value);
      const data = this.addProductForm.value;
      const fd = new FormData();
      fd.append('product_name',data.product_name);
      fd.append('price',data.price);
      fd.append('size',data.size);
      fd.append('description',data.description);
      fd.append('file', this.file, this.file.name);
      fd.append('cate_Id', data.cate_Id);
      console.log(fd);
      this.productsService.newProduct(fd).then((result: any) => {
        console.log(result);
        if (result.status == 200) {
          console.log("Hellllo")
          this.toastr.success('Success', result.message);
          this.submitted = false;
          this.addProductForm.reset();
          $('#exampleModal').modal('hide')
          this.showProductList()
          this.router.navigateByUrl('/products');
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
      this.isAdd= false;
      if (!this.isAdd) {
        this.addProductForm.get('file').clearValidators();
        this.addProductForm.get('file').updateValueAndValidity();
        this.productsService.EditProduct(this.id).then((data) => {
          const EditProduct = {
            product_name: data['data']['product_name'],
            size: data['data']['size'],
            price: data['data']['price'],
            cate_Id:data['data']['cate_Id']['_id'],
            description: data['data']['description'],
          }
          this.addProductForm.patchValue(EditProduct)
        })
      }
    }
  
    //User Data Update Function
    productUpdate() {
      const data = this.addProductForm.value;
      const fd = new FormData();
      fd.append('product_name',data.product_name);
      fd.append('price',data.price);
      fd.append('size',data.size);
      fd.append('description',data.description);
      fd.append('file', this.file, this.file.name);
      fd.append('cate_Id', data.cate_Id);
      this.productsService.updateProduct(fd, this.id).then((result: any) => {
        if (result.status == 200) {
          console.log("output" + result);
          this.toastr.success('Success', result.message);
          $('#exampleModal').modal('hide')
          this.showProductList()
          this.router.navigateByUrl('/products');
          this.submitted = false;
        }
      }).catch(err => {
        this.toastr.error('Error!', 'Toastr fanger!');
        console.log(err)
      });
    }
  
  //User List Display Function
    showProductList() {
      this.productsService.ProductList().then((result: any) => {
        this.productInfo = result.data;
        this.productInfo.map((e: any) => {
          e['file'] = e.file ? `http://localhost:5000/image/productImage/${e.file}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
        });
  
      }).catch(err => {
        console.log(err)
      })
    }
  
  //Delete Categories Function
    deleteProduct(_id: string) {
      // console.log("Hello");
      Confirm.show(
        'Delete',
        'Do you want to delete this Product?',
        'Yes',
        'No',
        () => {
          this.productsService.deleteProduct(_id).then((data: any) => {
            // console.log(data);
            if (data.status === 200) {
              Notify.success(data.message, {
                position: 'center-top'
              });
              this.showProductList();
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
