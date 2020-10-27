import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';




import { HomeComponent } from './../../pages/home/home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports:[
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }
