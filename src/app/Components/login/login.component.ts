import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /// change Input
  onChanhangeMethod( fname:any ){
   console.log(fname);    /// print all object of this input
  }

    /////   Forms
    // submitForm(form:any){
    //   console.log(form);
    // }
    submitForm(f:FormsModule){
      console.log("dddddd");
    }


}
