import { product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService { 
  numOfCartItems=new BehaviorSubject(0);
  productList=new BehaviorSubject(0);
  baseUrl:string='https://ecommerce.routemisr.com/'
  constructor( private _HttpClient:HttpClient) { }

  getAllproduct():Observable<any>   
  {
    return this._HttpClient.get(`${this.baseUrl}api/v1/products`)
  }

  getAllcategory():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}api/v1/categories`)
  }
  getproductdetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}api/v1/products/${id}`)
  }

  getproductcom():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}api/v1/products`)
  }

  
  getAllorders(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}api/v1/orders/user/${id}`)
  }

  getAllsubcategory():Observable<any>
{
 return this._HttpClient.get(`${this.baseUrl}api/v1/subcategories`)
}
}
