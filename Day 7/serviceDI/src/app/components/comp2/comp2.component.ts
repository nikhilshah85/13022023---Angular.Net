import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  _counterSerObj:CounterService;

   constructor(counterSerREF:CounterService) {
      this._counterSerObj = counterSerREF;
      
  }

}
