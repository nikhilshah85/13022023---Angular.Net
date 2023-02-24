import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

 private _httpService:HttpClient;
  commentsData:any = null;
  albumData:any = null;
  constructor(private _httpREF:HttpClient)
  {
    this._httpService = _httpREF;
   }

   getCommentsData()
   {
    this._httpService.get('https://jsonplaceholder.typicode.com/comments').subscribe( c=>{
      this.commentsData = c;
    })
   }

   getAlbums()
   {
    this._httpService.get('https://jsonplaceholder.typicode.com/albums').subscribe(a =>{
      this.albumData = a;
    })
   }


}




