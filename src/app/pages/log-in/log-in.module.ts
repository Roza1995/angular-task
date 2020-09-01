import { LogInComponent } from './log-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const logInRoutes: Routes = [
  { path: '', component: LogInComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(logInRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class LogInModule { }
