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

  add():void {
    this.router.navigate(['addProduct']);
  }

}
