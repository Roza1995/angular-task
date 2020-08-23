import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { ProductListComponent } from './../../product-list/product-list.component';
import { ProductRowComponent } from './../../product-list/components/product-row/product-row.component';
import { HomeComponent } from './../../pages/home/home.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductRowComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
