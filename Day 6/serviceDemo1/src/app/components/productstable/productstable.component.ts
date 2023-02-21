import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-productstable',
  templateUrl: './productstable.component.html',
  styleUrls: ['./productstable.component.css']
})
export class ProductstableComponent {
  productSerObj:ProductsService;

 
  constructor() {
    this.productSerObj = new ProductsService();
    
  }


}
