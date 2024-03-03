import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { AllordersService } from '../service/allorders.service';
AllordersService



@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent  implements OnInit{
  productList:any[]=[];
  constructor(private _ProductService:ProductService){}

  ngOnInit(): void {

  
  }

  Allorder(productId:string){
    this._ProductService.getAllorders(productId).subscribe({
      next:response=>{
        console.log(response);
       this.productList=response.data.shippingAddress
      },
      error:err=>{
        console.log(err);
      }
    })
  }

}
