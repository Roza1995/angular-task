import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './core/services/authentication.service';



import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatPaginatorModule } from '@angular/material/paginator';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


import { AppComponent } from './components/root/app.component';
import { HeaderComponent } from './components/header/header.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { EshopComponent } from './pages/eshop/eshop.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './pages/item/item.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpecialComponent } from './pages/special/special.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { BucketComponent } from './pages/bucket/bucket.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    LogInComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    RegisterComponent,
    EshopComponent,
    ItemComponent,
    FooterComponent,
    SpecialComponent,
    TestimonialsComponent,
    BucketComponent,
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    MatDialogModule,
    MatCarouselModule.forRoot(),
    MatPaginatorModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, NoopAnimationsModule // Only required for storage features

  ],
  exports:[
   
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

