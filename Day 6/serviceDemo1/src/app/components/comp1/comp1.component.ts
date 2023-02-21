import { Component } from '@angular/core';
import { FirstService } from 'src/app/service/first.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  firstSerObj:FirstService;

  
  constructor() {
 this.firstSerObj = new FirstService();
    
  }




}
