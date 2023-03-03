import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class AdminPanelAuthService {

  API_URL: string = "http://localhost:5000/";
  token=localStorage.getItem("token");
  constructor(private http: HttpClient) { }
  isAdd = new BehaviorSubject(true);

  //Backend Login service
  login(obj:any){
    return new Promise((resolve, reject) => {
      console.log(obj)
      let headers = new HttpHeaders({ 'Accept': 'application/json' });
      this.http.post(this.API_URL+'login', obj, { headers: headers }).toPromise().then((data:any) => {
          resolve(data);
      }, error => {
          reject(error);
      });
    });
    
  }

  // Backend registration service
  registration(obj: any) {
    return new Promise((resolve, reject) => {
      // console.log(obj);
      let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
      this.http.post(this.API_URL + 'register', obj).toPromise().then((data: any) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // Backend User List Service
  userList() {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Accept': 'application/json' ,'Authorization':`Bearer ${this.token}`});
      this.http.get(this.API_URL + 'userList', { headers: headers }).toPromise().then((data: any) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // Backend Delete User Service
  deleteUser(id: any) {
    // console.log(id);
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Accept': 'application/json' ,'Authorization':`Bearer ${this.token}`});
      this.http.delete(this.API_URL + `delUser/${id}`, { headers: headers }).toPromise().then((data: any) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  //Backend Edit User Data service to get Data
  EditUser(id: any) {
    // console.log(id);
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
      this.http.get(this.API_URL + `editUser/${id}`, { headers: headers }).toPromise().then((data: any) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // Backend Update User Data service to insert new data
  updateUser(obj: any, id: any) {
    return new Promise((resolve, reject) => {
      // const a = { "name": "hello" }
      let headers = new HttpHeaders({ 'Accept': 'application/json' ,'Authorization':`Bearer ${this.token}`});
      this.http.put(this.API_URL + `updateUser/${id}`, obj, { headers: headers }).toPromise().then((data: any) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }


}
