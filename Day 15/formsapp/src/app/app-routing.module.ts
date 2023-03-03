import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'product', component:ProducthomeComponent, children:[
    {path:'productlist',component:ProductsComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'searchproduct',component:SearchComponent},
    {path:'deleteproduct',component:DeleteproductComponent},
    {path:'editproduct',component:EditproductComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
