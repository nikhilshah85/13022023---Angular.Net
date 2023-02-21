import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-productssummary',
  templateUrl: './productssummary.component.html',
  styleUrls: ['./productssummary.component.css']
})
export class ProductssummaryComponent {
  productSerObj:ProductsService;

 
  constructor() {
    this.productSerObj = new ProductsService();
    
  }
}
