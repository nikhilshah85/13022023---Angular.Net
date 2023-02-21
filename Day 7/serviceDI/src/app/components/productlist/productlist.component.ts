import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

    _productSerObj:ProductsService;

    constructor(productSerREF:ProductsService)
    {
      this._productSerObj = productSerREF;
    }


}
