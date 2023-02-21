import { Component } from '@angular/core';
import { FirstService } from 'src/app/service/first.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  firstSerObj:FirstService;

  
  constructor() {
 this.firstSerObj = new FirstService();
    
  }

}
