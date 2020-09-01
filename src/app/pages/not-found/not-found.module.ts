import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const notFoundRoutes: Routes = [
  { path: '', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(notFoundRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotFoundModule { }
