import { product } from './../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';










@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  term:string=''
  isloading:boolean=true;
  productList:product[]=[]
  constructor(
    private _ProductService:ProductService,
   private _WishlistService:WishlistService,
    private _CartService:CartService,
    private toastr: ToastrService,
    ){}

  ngOnInit(): void {
    this.getAllproduct();
  }



  getAllproduct(){
    this._ProductService.getAllproduct().subscribe({
      next : response =>{
        this.isloading=false;
        this.productList=response.data
        console.log(response.data);
        
      },
      error: err => {
        this.isloading=false;
        console.log(err);
      

        
      }
    })
  }


  getproductcart(productId:string){
    this._CartService.addproductcart(productId).subscribe({
      next:(response:any) =>{
        console.log(response);
        this._CartService.numOfCartItems.next(response.numOfCartItems)
        this.toastr.success(response.message, '',{
          timeOut:2500,
          progressBar:true,
          
        });

        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }



  getwishList(productId:string){
    this._WishlistService.addproducttowishList(productId).subscribe({
      next:(response:any) =>{
        console.log(response);
        this._WishlistService.numOfcartItems.next(response.numOfCartItems)
        this.toastr.success(response.message, '',{
          timeOut:2500,
          progressBar:true,
          
        });

        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }














}





