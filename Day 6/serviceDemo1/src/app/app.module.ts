import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { ProductstableComponent } from './components/productstable/productstable.component';
import { ProductsdivComponent } from './components/productsdiv/productsdiv.component';
import { ProductssummaryComponent } from './components/productssummary/productssummary.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ProductstableComponent,
    ProductsdivComponent,
    ProductssummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
