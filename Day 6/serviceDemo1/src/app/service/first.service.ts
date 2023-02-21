import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {


  appName = "Service Demo";
  counterNumber = 1;


  addToCounter():number
  {
    return this.counterNumber++;
  }
  decreaseCounter():number
  {
    return this.counterNumber--;
  }

  constructor() { }
}
