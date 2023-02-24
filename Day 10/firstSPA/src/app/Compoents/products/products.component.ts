import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  pList = [
    {pId:101, pName:'Pepsi',pCategory:'Cold-Drinks', pPrice:50, pIsInStock:true},
    {pId:102, pName:'IPhone',pCategory:'Electronics', pPrice:50, pIsInStock:true},
    {pId:103, pName:'Air-Pods',pCategory:'Electronics', pPrice:50, pIsInStock:true},
    {pId:104, pName:'Coke',pCategory:'Cold-Drinks', pPrice:50, pIsInStock:true},

  ]

}
