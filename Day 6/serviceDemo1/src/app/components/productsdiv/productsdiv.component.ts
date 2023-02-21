import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-productsdiv',
  templateUrl: './productsdiv.component.html',
  styleUrls: ['./productsdiv.component.css']
})
export class ProductsdivComponent {

  productSerObj:ProductsService;

 
  constructor() {
    this.productSerObj = new ProductsService();
    
  }
}
