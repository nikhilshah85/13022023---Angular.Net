import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {


  productList =[
    {pId:101, pName:'Pepsi', pCategory:'Cold-Drink',pPrice:50},
    {pId:102, pName:'IPhone', pCategory:'Electronics',pPrice:50},
    {pId:103, pName:'Fossil', pCategory:'Electronics',pPrice:50},
    {pId:104, pName:'Air Pods', pCategory:'Electronics',pPrice:50}
  ]

  addProduct(newProduct:any)
  {

    console.log(newProduct);
    this.productList.push(newProduct);
  }

  constructor() { }
}
