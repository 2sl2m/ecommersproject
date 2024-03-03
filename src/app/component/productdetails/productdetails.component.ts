
import { product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
isloading:boolean=true;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }
productItem:any;
  productId:string=''
  constructor(private _ProductService:ProductService ,
     private _ActivatedRoute:ActivatedRoute,
     private _CartService:CartService,
     private toastr: ToastrService){}
ngOnInit(): void {
 this._ActivatedRoute.params.subscribe(params =>{
  this.productId=params['id']
 })
  
  this._ProductService.getproductdetails(this.productId).subscribe({
    next:response =>{
      this.isloading=false
      this.productItem= response.data
      console.log(response);
      
    },
    error:err =>{
      this.isloading=false
      console.log(err);
      
    }
  })
}


getproductcart(productId:string){
  this._CartService.addproductcart(productId).subscribe({
    next:(response:any) =>{
      console.log(response);
      this.toastr.success(response.message, '',{
        timeOut:2500,
        progressBar:true,
      });
      this._CartService.numOfCartItems.next(response.numOfCartItems)
      
    },
    error:err=>{
      console.log(err);
      
    }
  })
}
}
