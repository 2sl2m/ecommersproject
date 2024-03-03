import { product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfCartItems=new BehaviorSubject(0);
  productList=new BehaviorSubject(0);
  headers={
  token :localStorage.getItem('usertoken')||''
  }

baseUrl:string='https://route-ecommerce.onrender.com'
  constructor(private _HttpClient:HttpClient) {
    this.getLoggedUserCart().subscribe({
      next:response=>{
        console.log(response);
        this.numOfCartItems.next(response.numOfCartItems)

        
      },
      error:err=>{
        console.log(err);
        
      }
    })
   }


 
   addproductcart(productId:string){
   return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,
   {productId:productId},
  { headers :this.headers}
   )
  }


  

  getLoggedUserCart():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,
   { headers :this.headers}
    )
   }

   removeItembyId(productId:string):Observable<any>
   {
     return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${productId}`,
    { headers :this.headers}
     )
    }


    UpdateProductCount(productId:string,count:number):Observable<any>
    {
      return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${productId}`,{count:count},{ headers :this.headers})
}

DeleteProductCount():Observable<any>
{
  return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/`,{ headers :this.headers})
}


removeItemwish(productId:string):Observable<any>
{
  return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${productId}`,
 { headers :this.headers}
  )
 }

  
}
