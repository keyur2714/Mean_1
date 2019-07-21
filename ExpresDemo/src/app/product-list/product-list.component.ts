import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = []
  
  constructor(private productService : ProductService,private router : Router) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList():void{  
    this.productService.getProductList().subscribe(
      (productList : Product[])=>{
        this.productList = productList;
      }
    )
  }

  edit(productId : number):void{
    this.router.navigate(['editProduct',productId]);
  }

  delete(productId : number):void{
    let confirmMsg = confirm("Are you sure want to delete?");
    if(confirmMsg){
      this.productService.deleteProductById(productId).subscribe(
        (response)=>{
          alert("Product Deleted Successfully...!");
          this.getProductList();
        }
      )
    }
  }

  add():void {
    this.router.navigate(['addProduct']);
  }

}
