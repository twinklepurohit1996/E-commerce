import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  registration(obj:any){
    return new Promise((resolve, reject) => {
      console.log(obj)
      let headers = new HttpHeaders({ 'Accept': 'application/json' });
      this.http.post(this.API_URL+'register', obj).toPromise().then((data:any) => {
          resolve(data);
      }, error => {
          reject(error);
      });
    });
    
  }

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
}
