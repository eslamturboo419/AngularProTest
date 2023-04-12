import { HttpComponentComponent } from './Components/http-component/http-component.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRecativeFormComponent } from './Components/login-recative-form/login-recative-form.component';
import { SharComponentComponent } from './Components/shar-component/shar-component.component';

const routes: Routes = [

  {path:'',redirectTo:'/Login', pathMatch:'full'  },

  {path:'Login',component:LoginComponent   },
  {path:'LoginReactive',component:LoginRecativeFormComponent   },
  {path:'SharComponent',component:SharComponentComponent   },
  {path:'httpComponent',component:HttpComponentComponent   },
  { path:'**' ,component:LoginComponent },  /// if the path not Exists redirect to Home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
