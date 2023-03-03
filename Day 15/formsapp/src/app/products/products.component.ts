import { Component } from '@angular/core';
import { ProdserviceService } from '../prodservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    _prod:ProdserviceService;

    constructor(_prodREF:ProdserviceService)
    {
      this._prod = _prodREF;
    }
}
