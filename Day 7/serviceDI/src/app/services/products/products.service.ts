import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    productList = [
      {pId:101, pName:'Pepsi',pCategory:'Cold-Drink',pPrice:50},
      {pId:102, pName:'Puma',pCategory:'Shoes',pPrice:50},
      {pId:103, pName:'Iphone',pCategory:'Electronis',pPrice:50},
      {pId:104, pName:'Coke',pCategory:'Cold-Drink',pPrice:50}
    ]

    addNewProduct()
    {
      let newProduct = {pId:105, pName:'Air Pods',pCategory:'Accessories',pPrice:250}
      this.productList.push(newProduct);
    }


  constructor() { }
}
