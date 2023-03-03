import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  API_URL:string =  "http://localhost:5000/";
  token=localStorage.getItem("token");
  constructor(private http: HttpClient) { }
  contactUs(obj:any){
      return new Promise((resolve, reject) => {
        console.log(obj);
        let headers = new HttpHeaders({'Authorization':`Bearer ${this.token}`});
        this.http.post(this.API_URL+'contact/contactUs', obj).toPromise().then((data:any) => {
            resolve(data);
        }, error => {
            reject(error);
        });
      });
  }
}
