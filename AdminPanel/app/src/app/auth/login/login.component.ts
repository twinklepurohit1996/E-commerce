import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelAuthService } from 'app/services/admin-panel-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AdminPanelAuthService,private router: Router) { }
  submitted = false;
  ngOnInit(): void {}
  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  get loginFormControl() {
    return this.loginForm.controls;
  }

  //Admin Login Function 
  loginUser()
  {
    console.log(this.loginForm.value)
    this.submitted = true;
      this.authService.login(this.loginForm.value).then((result:any)=>{
        console.log(result);
        if(result.status==200)
        {
          localStorage.setItem("token",result.token);          
          this.router.navigateByUrl('/home');
        }
        else
        {
          this.router.navigateByUrl('/');
        }
      },(error) =>{
        alert("Error in login")
        console.log(error);
      });
  }
}
