import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted=false;
  constructor() { }

  userContactus = new FormGroup(
    {
      name:new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('',[Validators.required])
    });

    public validationMessages = {
      'name':[{type:'requred',message:'Name is required'}],
      'email': [{ type: 'required', message: 'Email is required' }],
      'subject': [{ type: 'required', message: 'Subject is required' }],
      'message':[{type:'requred',message:'Message is required'}]
    };
  ngOnInit(): void {
  }

  contactUs(){
    this.submitted=true;
    console.log(this.userContactus.value);
  }
}
