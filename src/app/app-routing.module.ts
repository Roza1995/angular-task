import { ProductsGuard } from './core/guards/products.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent} from './pages/item/item.component';
import { SpecialComponent} from './pages/special/special.component';
import { TestimonialsComponent} from './pages/testimonials/testimonials.component';
import {BucketComponent} from './pages/bucket/bucket.component';




const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
    canActivate: [ProductsGuard],
  },
  {
    path: 'about', 
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {  
    path: 'contact', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {  
    path: 'login', 
    loadChildren: () => import('./pages/log-in/log-in.module').then(m => m.LogInModule),   
  },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
  {  
    path: 'forgot-password', 
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'e-shop',
    loadChildren: () => import('./pages/eshop/eshop.module').then(m => m.EshopModule),
  },
  {
    path: 'item/:id', component: ItemComponent,
  },
  {
    path: 'special', component: SpecialComponent,
  },
  {
    path: 'testimonials', component: TestimonialsComponent,
  },
  {
    path: 'bucket', component: BucketComponent,
  },

  { 
    path: '**', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
