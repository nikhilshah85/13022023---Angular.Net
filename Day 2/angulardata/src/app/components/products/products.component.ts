import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  totalProducts = 20;
  componentName = 'Products';
  productCategories = ['Cold-Drinks','Shoes', 'Electronics','Gadgets', 'Cloths', 'Accessories'];

  productList  =[
    { pId:101,pName:'Pepsi',pCategory:'Cold-Drink',pPrice:50,pIsInStock:true },
    { pId:101,pName:'Iphone',pCategory:'Electronics',pPrice:140000,pIsInStock:true },
    { pId:101,pName:'Nike',pCategory:'Shoes',pPrice:9000,pIsInStock:false },
    { pId:101,pName:'Puma',pCategory:'Shoes',pPrice:12000,pIsInStock:true },
    { pId:101,pName:'SuperDry',pCategory:'Cloths',pPrice:3000,pIsInStock:true },
    { pId:101,pName:'AirPods',pCategory:'Accessories',pPrice:27000,pIsInStock:false },
  ]

}
