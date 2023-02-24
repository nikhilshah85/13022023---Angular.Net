import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Compoents/about/about.component';
import { ContactComponent } from './Compoents/contact/contact.component';
import { HomeComponent } from './Compoents/home/home.component';
import { LoginComponent } from './Compoents/login/login.component';
import { ProductsComponent } from './Compoents/products/products.component';
import { RegisterComponent } from './Compoents/register/register.component';
import { ReviewsComponent } from './Compoents/reviews/reviews.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'products',component:ProductsComponent},
    {path:'reviews',component:ReviewsComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
