import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

   APIURL:string="https://fakerestapi.azurewebsites.net/api/v1/Activities";

  constructor( private http:HttpClient ) { }


getAll(){
  return  this.http.get(this.APIURL);
}


addproduct( pro:IActivities)
{
 return this.http
 .post<IActivities>(this.APIURL, pro  );
}

updateActivites( proId:number , UPpro:IActivities ){
  return this.http
  .put<IActivities>(this.APIURL+`/${proId}`,UPpro  );
}

deleteProduct( proId:number ){
  return this.http.delete(this.APIURL+`/${proId}`);
 }




}

export interface IActivities {
  id: number,
  title: string,
  dueDate: string,
  completed: boolean

 }
