import { Component } from '@angular/core';
import { ProdserviceService } from '../prodservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  _prod:ProdserviceService;
  constructor(_prodREF:ProdserviceService)
  {
    this._prod = _prodREF;
  }
}
