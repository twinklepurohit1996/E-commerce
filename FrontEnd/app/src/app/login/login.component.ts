import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted=false;
  constructor(private authService: AuthService,private router: Router) { }

  userLogin = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    public validationMessages = {
      'email': [{ type: 'required', message: 'Email is required' }],
      'password': [{ type: 'required', message: 'Password is required' }]};
  ngOnInit(): void {
  }

  login(){
    console.log(this.userLogin.value);
    this.submitted = true;
      this.authService.login(this.userLogin.value).then((result:any)=>{
        console.log(result);
        if(result.status==200)
        {
          localStorage.setItem("token",result.token);          
          this.router.navigateByUrl('/contact');
        }
        // else
        // {
        //   this.router.navigateByUrl('/');
        // }
      },(error: any) =>{
        alert("Error in login")
        console.log(error);
      });
  }
  
}
