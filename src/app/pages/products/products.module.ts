import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';




import { ProductListComponent } from './../../product-list/product-list.component';
import { ProductRowComponent } from './../../product-list/components/product-row/product-row.component';
import { ProductsComponent } from './../../pages/products/products.component';

const productsRoutes: Routes = [
  { path: '', component: ProductsComponent}
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductRowComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(productsRoutes)
  ],
  exports:[
    ProductsComponent,
    RouterModule
  ]
})
export class ProductsModule { }
