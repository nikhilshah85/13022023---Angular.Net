import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  _productSerObj:ProductsService;

  constructor(productSerREF:ProductsService)
  {
    this._productSerObj = productSerREF;
  }
}
