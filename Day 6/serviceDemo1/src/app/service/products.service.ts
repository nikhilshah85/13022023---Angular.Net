import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  productList = [
    {pId:101, pName:'Pepsi',pCategory:'Cold-Drink', pPrice:50, pIsInStock:true},
    {pId:102, pName:'IPhone',pCategory:'Electronics', pPrice:50, pIsInStock:true},
    {pId:103, pName:'Fossil',pCategory:'Watch', pPrice:50, pIsInStock:false},
    {pId:104, pName:'AirPods',pCategory:'Electronics', pPrice:50, pIsInStock:true},
    {pId:105, pName:'Samsung',pCategory:'Electronics', pPrice:50, pIsInStock:false},
    {pId:106, pName:'Puma',pCategory:'Shoes', pPrice:50, pIsInStock:true},
    {pId:107, pName:'Coke',pCategory:'Cold-Drink', pPrice:50, pIsInStock:true},
    {pId:108, pName:'Appy',pCategory:'Cold-Drink', pPrice:50, pIsInStock:true},
  ]

  totalProducts =0;
  totalElectronics = 0;
  totalColdDrinks = 0;
  totalShoes = 0;

  productSummary()
  {
    this.totalProducts = this.productList.length;
    for (let i = 0; i < this.productList.length; i++) {
      if(this.productList[i].pCategory == 'Cold-Drink')
      {
        this.totalColdDrinks = this.totalColdDrinks + 1;
      }
      else if(this.productList[i].pCategory == 'Electronics')
      {
        this.totalElectronics = this.totalElectronics + 1;
      }
      else if(this.productList[i].pCategory == 'Shoes')
      {
        this.totalShoes = this.totalShoes + 1;
      }
    }
    return;
  }


  constructor() { }
}
