import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { GendergreetPipe } from './pipes/gendergreet.pipe';
import { RateingsPipe } from './pipes/rateings.pipe';
import { ProductsComponent } from './components/products/products.component';
import { TaxPipe } from './pipes/tax.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
import { OfferpricePipe } from './pipes/offerprice.pipe';
import { BuypricePipe } from './pipes/buyprice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    GendergreetPipe,
    RateingsPipe,
    ProductsComponent,
    TaxPipe,
    DiscountPipe,
    OfferpricePipe,
    BuypricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
