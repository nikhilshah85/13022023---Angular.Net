import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { ProductsComponent } from './components/products/products.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { CheckuserService } from './services/checkuser.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrderhistoryComponent, canActivate:[CheckuserService]},
  {path:'cart',component:CartComponent, canActivate:[CheckuserService]},
  {path:'wallet',component:WalletComponent, canActivate:[CheckuserService]},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
