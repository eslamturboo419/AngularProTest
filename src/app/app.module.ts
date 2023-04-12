import { LoginRecativeFormComponent } from './Components/login-recative-form/login-recative-form.component';
import { DbServices } from './Services/db-services';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//    forms Module
import { FormsModule } from '@angular/forms';

/// Add ng2-validation
import { CustomFormsModule } from 'ng2-validation'

/// Working With ReactiveFormsModule
import {ReactiveFormsModule} from '@angular/forms';

/// working with Http and services
import { HttpClientModule  } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharComponentComponent } from './Components/shar-component/shar-component.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpComponentComponent } from './Components/http-component/http-component.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SharComponentComponent,
    LoginComponent ,
    LoginRecativeFormComponent,
    HttpComponentComponent,
    NavBarComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    CustomFormsModule ,
    ReactiveFormsModule ,
    HttpClientModule

  ],
  providers: [
    DbServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
