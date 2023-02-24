import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Compoents/home/home.component';
import { AboutComponent } from './Compoents/about/about.component';
import { ContactComponent } from './Compoents/contact/contact.component';
import { ReviewsComponent } from './Compoents/reviews/reviews.component';
import { ProductsComponent } from './Compoents/products/products.component';
import { LoginComponent } from './Compoents/login/login.component';
import { RegisterComponent } from './Compoents/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ReviewsComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
