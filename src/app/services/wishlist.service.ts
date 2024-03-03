import { BehaviorSubject, Observable } from 'rxjs';
import { product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  isloading:boolean=true;

baseUrl:string='https://route-ecommerce.onrender.com/'
numOfcartItems=new BehaviorSubject(0);

  headers={
    token :localStorage.getItem('usertoken')||''
    }
    constructor(private _HttpClient:HttpClient) { }

  addproducttowishList(productId:string):Observable<any>
  {
 return   this._HttpClient.post(`${this.baseUrl}api/v1/wishlist`,
    {productId:productId},
    { headers :this.headers})
  }



  getLoggedUserwish():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}api/v1/wishlist`,
   { headers :this.headers}
    )
   }




   
  addwishtocard(productId:string):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}api/v1/cart`,{productId:productId},
   { headers :this.headers}
    )
    
   }
   
}
