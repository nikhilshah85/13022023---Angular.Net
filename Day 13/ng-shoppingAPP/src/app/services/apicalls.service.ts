import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {


  _http:HttpClient;

  productsData:any;

  getProductsData()
  {
      this._http.get('https://localhost:7040/api/Products').subscribe(data =>{
        this.productsData = data;
        
      });
      return this.productsData;
  }

  constructor(_httpREF:HttpClient) {
    this._http = _httpREF;
   }
}
