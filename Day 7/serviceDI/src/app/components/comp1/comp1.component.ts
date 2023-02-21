import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

    //counterSerObj:CounterService; //without Dependency Inection;
    _counterSerObj:CounterService; //use _when u want to use DI  (_ is just a name convention)
      
      constructor(_counterSerREF:CounterService) {
          
        //instead of we createing the object, framework creates the object and passes the reference
        //to this component in constructor
        //counterSerObj = new CounterService(); not DI 
        this._counterSerObj = _counterSerREF;


      }







}
