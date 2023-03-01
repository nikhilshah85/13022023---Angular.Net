import { Component } from '@angular/core';
import { CheckuserService } from 'src/app/services/checkuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 _checkUser:CheckuserService;
 constructor(_checkUserREF:CheckuserService)
 {
  this._checkUser = _checkUserREF;
 }

 




 
}
