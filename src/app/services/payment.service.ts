import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }
  headers={
    token :localStorage.getItem('usertoken')||''
    }
  
  baseUrl:string='https://route-ecommerce.onrender.com'
  checkOut(cartId:string,shippingAddress:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
    {shippingAddress:shippingAddress},
    {headers:this.headers}
    )
  }
}
