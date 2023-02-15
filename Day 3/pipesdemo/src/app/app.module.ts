import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { NumbertestPipe } from './pipes/numbertest.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    GreetingPipe,
    NumbertestPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
