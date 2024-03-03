import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.css']
})
export class ProductesComponent implements OnInit{
term:string=''
  isloading:boolean=true;
 productList:product[]=[]
  constructor(private _ProductService:ProductService, private _CartService:CartService, private toastr: ToastrService, private _WishlistService:WishlistService){}
  ngOnInit(): void {
    this._ProductService.getproductcom().subscribe({
      next : response =>{
        this.isloading=false;
       this.productList=response.data
        console.log(response);
        this._ProductService.numOfCartItems.next(response.data.numOfCartItems)

        
      },
      error : err =>{
        this.isloading=false;
        console.log(err);
        
      }
    })
  }


  addproducttocart(productId:string){
    this._CartService.addproductcart(productId).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.isloading=false;
    this._CartService.numOfCartItems.next(response.numOfCartItems)
    this.toastr.success(response.message, '',{    
      timeOut:2500,
      progressBar:true,
      closeButton:true,
    });

    

      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

  getproductwishlist(productId:string){
    this._WishlistService.addproducttowishList(productId).subscribe({
      next:(response:any)=>{
        console.log(response); 
        this.isloading=false;
   this._WishlistService.numOfcartItems.next(response.numOfCartItems)
        this.toastr.success(response.message, '',{
          timeOut:2500,
          progressBar:true,
          
        });

      },
    })

}

}
