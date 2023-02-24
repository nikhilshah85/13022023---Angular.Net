import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent {


  _http:HttpClient;
  postdetails:any = null; //this is wher data will come

  constructor(_httpREF:HttpClient)
  {
    this._http = _httpREF;
  }

  getPostData()
  {
    this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe( p=>{
      this.postdetails = p;
      console.log(this.postdetails);

    })
  }

}





