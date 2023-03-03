import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL: string = "http://localhost:5000/";
  token=localStorage.getItem("token");
  constructor(private http: HttpClient) { }
  isAdd = new BehaviorSubject(true);

    // Backend Add Categories service
    newProduct(obj: any) {
      return new Promise((resolve, reject) => {
        console.log(obj);
        let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
        this.http.post(this.API_URL + 'products/addProduct', obj).toPromise().then((data: any) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }

    cateDrop(){
      return new Promise((resolve, reject) => {
        let headers = new HttpHeaders({ 'Accept': 'application/json','Authorization':`Bearer ${this.token}` });
        this.http.get(this.API_URL+'products/cateDrop', { headers: headers }).toPromise().then((data:any) => {
            resolve(data);
        }, error => {
            reject(error);
        });
      });
    }

    ProductList(){
      return new Promise((resolve, reject) => {
        let headers = new HttpHeaders({ 'Accept': 'application/json','Authorization':`Bearer ${this.token}` });
        this.http.get(this.API_URL+'products/productList', { headers: headers }).toPromise().then((data:any) => {
            resolve(data);
        }, error => {
            reject(error);
        });
      });
    }

    EditProduct(id:any){
      console.log(id);
      return new Promise((resolve, reject) => {
        let headers = new HttpHeaders({'Authorization':`Bearer ${this.token}` });
        this.http.get(this.API_URL+`products/editProduct/${id}`, { headers: headers }).toPromise().then((data:any) => {
            resolve(data);
        }, error => {
            reject(error);
        });
      });
    }

    updateProduct(obj:any,id:any){
      console.log("id"+id);
    return new Promise((resolve, reject) => {
      console.log(id)
      let headers = new HttpHeaders({ 'Accept': 'application/json' ,'Authorization':`Bearer ${this.token}`});
      this.http.put(this.API_URL+`products/updateProduct/${id}`, obj, { headers: headers }).toPromise().then((data:any) => {
          resolve(data);
      }, error => {
          reject(error);
      });
    });
  
    }

    deleteProduct(id:any){
    // console.log(id);
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Accept': 'application/json' ,'Authorization':`Bearer ${this.token}`});
      this.http.delete(this.API_URL + `products/delProduct/${id}`, { headers: headers }).toPromise().then((data: any) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
    }
}
