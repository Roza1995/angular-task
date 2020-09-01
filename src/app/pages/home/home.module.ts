import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';




import { ProductListComponent } from './../../product-list/product-list.component';
import { ProductRowComponent } from './../../product-list/components/product-row/product-row.component';
import { HomeComponent } from './../../pages/home/home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent}
]

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
    HttpClientModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports:[
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }
