import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';

const routes: Routes = [
  {path : '' , component : ProductListComponent},
  {path : 'addProduct' , component : ProductEntryComponent},
  {path : 'editProduct/:id' , component : ProductEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
