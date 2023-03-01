import { Component } from '@angular/core';
import { ApicallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  _apiObj:ApicallsService;
  constructor(_apiObjREF:ApicallsService)
  {
    this._apiObj = _apiObjREF;
    this._apiObj.getProductsData();
  }

}
