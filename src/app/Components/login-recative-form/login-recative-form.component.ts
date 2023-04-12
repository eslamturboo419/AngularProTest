import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-recative-form',
  templateUrl: './login-recative-form.component.html',
  styleUrls: ['./login-recative-form.component.css']
})
export class LoginRecativeFormComponent implements OnInit {
  userRacForm:FormGroup;

  constructor() {
    this.userRacForm  = new FormGroup({
      fname : new FormControl('',[Validators.required]),
      lname :new  FormControl(''),
      address :new  FormControl(''),
      password :new  FormControl(''),

    })
  }

  ngOnInit(): void {
  }

  submitForm(frm:FormGroup) {

         /// Check Data API  ->
        /// 1- Login
        /// 2- success
        /// 3- Failed

   //// Code to enable errors in forms
   return this.userRacForm.setErrors({ invalidLogin:true });

  }

}
