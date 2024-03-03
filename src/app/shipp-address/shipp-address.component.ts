import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-shipp-address',
  templateUrl: './shipp-address.component.html',
  styleUrls: ['./shipp-address.component.css']
})
export class ShippAddressComponent {
  
  cartId:string=''
 shippingAddress:FormGroup=new FormGroup({
  details: new FormControl(),
  phone: new FormControl(),
   city: new FormControl()

 })
 constructor(private _PaymentService:PaymentService, private _ActivatedRoute:ActivatedRoute){}

 submitshippingAddress(dataform:FormGroup){
  this._ActivatedRoute.params.subscribe(params =>{
  this.cartId=params['id']
  })


    this._PaymentService.checkOut(this.cartId,dataform.value).subscribe({
      next:response=>{
        window.location.href=response.session.url
        console.log(response);
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
 }

}
