import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  counterValue:number = 0;


    increaseCounter()
    {
      this.counterValue = this.counterValue + 1;
    }

    decreseCounter()
    {
      this.counterValue = this.counterValue - 1;
    }


  constructor() { }
}
