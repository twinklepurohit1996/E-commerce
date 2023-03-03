import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
    
  API_URL: string = "http://localhost:5000/";
  token=localStorage.getItem("token");
  constructor(private http: HttpClient) { }
  isAdd = new BehaviorSubject(true);

   // Backend Add Categories service
   newCate(obj: any) {
    return new Promise((resolve, reject) => {
      // console.log(obj);
      let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
      this.http.post(this.API_URL + 'categories/addCate', obj).toPromise().then((data: any) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  //Admin panel Categories List Display
  CategoriesList(){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Accept': 'application/json','Authorization':`Bearer ${this.token}` });
      this.http.get(this.API_URL+'categories/cateList', { headers: headers }).toPromise().then((data:any) => {
          resolve(data);
      }, error => {
          reject(error);
      });
    });
  }

  //Admin Panel Single Categories Delete
  deleteCategories(id:any){
    console.log(id);
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Accept': 'application/json' ,'Authorization':`Bearer ${this.token}`});
      this.http.delete(this.API_URL+`categories/delCate/${id}`, { headers: headers }).toPromise().then((data:any) => {
          resolve(data);
      }, error => {
          reject(error);
      });
    });
  } 

  EditCate(id:any){
    console.log(id);
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Accept': 'application/json','Authorization':`Bearer ${this.token}` });
      this.http.get(this.API_URL+`categories/editCate/${id}`, { headers: headers }).toPromise().then((data:any) => {
          resolve(data);
      }, error => {
          reject(error);
      });
    });
  }

  updateCategories(obj:any,id:any){
    console.log("id"+id);
    return new Promise((resolve, reject) => {
      console.log(id)
      let headers = new HttpHeaders({ 'Accept': 'application/json','Authorization':`Bearer ${this.token}` });
      this.http.put(this.API_URL+`categories/updateCate/${id}`, obj, { headers: headers }).toPromise().then((data:any) => {
          resolve(data);
      }, error => {
          reject(error);
      });
    });
  }

}
