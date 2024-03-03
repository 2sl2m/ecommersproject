import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { ToastrService } from 'ngx-toastr';







@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  isloading:boolean=true
   productItem:string='';
   productprice:number=0;
   producttitle:string='';
  productList:any[]=[]
constructor(private _CartService:CartService, private _WishlistService:WishlistService,private toastr: ToastrService){}

ngOnInit(): void {
 this.getlooggedwish();

}



removeproductwish(productId:string){
  this._CartService.removeItemwish(productId).subscribe({
  next:response=>{
    console.log(response);
    this.productList= response.data
    this._CartService.productList.next(response)

  },
  error:err=>{
    console.log(err);
    
  }
  })
}


getlooggedwish(){

  this._WishlistService.getLoggedUserwish().subscribe({
    next:response=>{
      this.productList= response.data
      this.isloading=false
      console.log(response);

    },
    error: response=>{
    this.isloading=false

      console.log(response);
      
    }
  })


}



sendproducttocart(productId:string){
  this._CartService.addproductcart(productId).subscribe({
    next:(response:any)=>{
      this.isloading=false;
  console.log(response);
      this.productList= response.data;
  this.toastr.success(response.status, '',
  {    
    timeOut:2500,
    progressBar:true,
    closeButton:true,
  })

    },
    error:err=>{
      this.isloading=false;
      console.log(err);
      
    }
    
  })


}
}
