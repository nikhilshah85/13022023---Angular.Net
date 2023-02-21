import { Component } from '@angular/core';
import { count } from 'rxjs';

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

    myNumbers:number[] = [];
    rowOne:number[] = [];
    rowTwo:number[] = [];
    rowThree:number[] = [];

    generateNumbers()
    {
      let count = 0;
      while (count < 16) 
      {
       let newnum =  Math.floor(Math.random() * 200);
        this.myNumbers.push(newnum);        
        this.removeDuplicates(this.myNumbers);
        if(count < 16)
        {
        count++
        }
      }  
      this.generateRowOne();

    }

    generateRowOne()
    {
        
    }


    getTotal(){
      return this.myNumbers.length;
    }

     removeDuplicates(arr:any[]) {
      var unique = [];
      for(var i=0; i < arr.length; i++){  
          if(unique.indexOf(arr[i]) === -1) {  
              unique.push(arr[i]);  
          }  
      }
      
  }




}




