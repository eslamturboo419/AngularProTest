import { HttpServicesService } from './../../Services/http-services.service';
import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css']
})
export class HttpComponentComponent implements OnInit {

ngOnDestroy(): void {
              /// ADD to local storage once in the page and then destory it when close the page
  localStorage.removeItem("thisDB");
}

    url:string="https://fakerestapi.azurewebsites.net/api/v1/Activities";
     apiData:any;

//"id": 21,
//"title": "Activity 21",
//"dueDate": "2023-04-13T11:41:57.8333199+00:00",
//"completed": false

  constructor( private http:HttpClient
              ,private httpSer:HttpServicesService ) {

    this.http.get(this.url).subscribe( res=>{
               this.apiData = res;
                 console.log(res);
                });


   }

  ngOnInit(): void {

  }

 submitForm(){

     let postform=  {"id": 0,
     "title": "string",
     "dueDate": "2023-04-12T15:23:10.377Z",
     "completed": true
    }

    this.http.post(this.url,postform).subscribe(res=>{
      this.apiData.push(res);
             console.log(res);
    });
 }

   ///// Update
   /// https://fakerestapi.azurewebsites.net/api/v1/Activities/10

  onUpdate(id:number , obj:any){
  obj={
    //   id = 100;
    //   obj = {"id": 0,
    //   "title": "string",
    //   "dueDate": "2023-04-12T15:23:10.377Z",
    //   "completed": true
  }

    this.http.put(this.url+`/${id}` , obj ).subscribe(res=>{
        console.log(res);
      ///////
      let index = this.apiData.indexOf(id);
       this.apiData[index] = res;
        console.log("..."+ this.apiData[index] );
    });
  }

  onDelete(id:number){
    this.http.delete(this.url+`/${id}`).subscribe( res=>{

      // this.apiData.splice(id, 1);
               console.log(res);
    });
  }





}
