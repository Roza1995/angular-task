import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const aboutRoutes: Routes = [
  { path: '', component: AboutComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutModule { }
