import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartmessage=''
  cartId:string=''
  isloading:boolean=true

  numOfCartItems:number=0;
  TotalCartPrice:number=0;
  productList:any[]=[];
  constructor(private _CartService:CartService,private _WishlistService:WishlistService){}
  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next:response=>{
        this.isloading=false
        this.cartId=response.data._id
        this.numOfCartItems=response.numOfCartItems;
        this.TotalCartPrice=response.data.totalCartPrice;
        this.productList=response.data.products;
        
        console.log(response);
      },
      error:err=>{
        this.isloading=false
        console.log(err);
      this.cartmessage=err.error.message
        
      }
    })
  }

  removeCartfromId(productId:string){
    this._CartService.removeItembyId(productId).subscribe({
      next:response=>{
        this.numOfCartItems=response.numOfCartItems;
        this.TotalCartPrice=response.data.totalCartPrice;
        this.productList=response.data.products;
        this._CartService.numOfCartItems.next(response.numOfCartItems)
        console.log(response);
      },
      error:err=>{
        console.log(err);  
      }
    })
  }

  updateCartQuantity(productId:string,count:number){
    this._CartService.UpdateProductCount(productId,count).subscribe({
      next:response=>{
        this.numOfCartItems=response.numOfCartItems;
        this.TotalCartPrice=response.data.totalCartPrice;
        this.productList=response.data.products;
        console.log(response);
      },
      error:err=>{
        console.log(err);  
      }
    })
  }

  DeleteCartQuantity(){
    this._CartService.DeleteProductCount().subscribe({
      next:response=>{
        this.cartmessage='No Cart Exist for this User'
        this.numOfCartItems=0;
        this.TotalCartPrice=0;
        this.productList=[];
        console.log(response);
      },
      error:err=>{
        console.log(err);  
      }
    })
  }

 
}
