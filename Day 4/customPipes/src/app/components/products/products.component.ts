import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    pList = [
      {pId:101, pName:'Pepsi',pCategory:'Cold-Drink',pPrice:50},
      {pId:102, pName:'IPhone',pCategory:'Electronics',pPrice:140000},
      {pId:103, pName:'Coke',pCategory:'Cold-Drink',pPrice:75},
      {pId:104, pName:'Fossil',pCategory:'Electronics',pPrice:24000},
      {pId:105, pName:'IPad',pCategory:'Electronics',pPrice:46000},
      {pId:106, pName:'AirPods',pCategory:'Electronics',pPrice:27000},
      {pId:107, pName:'Nike',pCategory:'Shoes',pPrice:12000},
      {pId:108, pName:'Appy',pCategory:'Cold-Drink',pPrice:100},
    ]

}
