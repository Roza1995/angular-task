import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { EshopComponent} from './eshop.component';


const eshopRoutes: Routes = [
  { path: '', component: EshopComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(eshopRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class EshopModule { }
