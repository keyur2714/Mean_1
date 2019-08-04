import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../manage-products/product.service';
import { Router } from '@angular/router';
import { Product } from '../manage-products/product.mode';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-mat-manage-product',
  templateUrl: './mat-manage-product.component.html',
  styleUrls: ['./mat-manage-product.component.css']
})
export class MatManageProductComponent implements OnInit {

  productList : Product[] = [];

  displayedColumns: string[] = ['product_id', 'code', 'description', 'price', 'action'];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService : ProductService,private router:Router) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList():void {
    this.productService.getProductList().subscribe(
      (productList : Product[])=>{
        this.productList = productList;
        this.dataSource = new MatTableDataSource(this.productList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  delete(productId : number):void{
    let confirmMsg = confirm("Are you sure want to delete Product?");
    if(confirmMsg){
      this.productService.deleteProductById(productId).subscribe(
        (data)=>{
          alert("Product Deleted successfully...");
          this.getProductList();
        }
      )
    }
  }
}
