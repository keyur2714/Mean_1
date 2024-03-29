import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { MatManageProductComponent } from './mat-manage-product/mat-manage-product.component';

const routes : Routes = [
    { path : '' , component : ManageProductsComponent},
    { path : 'addProduct', component : ProductEntryComponent },
    { path : 'deleteProduct/:id', component : ManageProductsComponent },    
    { path : 'editProduct/:id', component : ProductUpdateComponent },
    { path : 'matManageProduct' , component : MatManageProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}