import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckuserService implements CanActivate {

  isUserLoggedIn = false;
  constructor() { }

  checkUserCredentials(userName:string, pwd:string)
  {
    if(userName == 'Nikhil' && pwd == 'Pass@1234')
    {
      this.isUserLoggedIn = true;
      alert('Welcome');
      return this.isUserLoggedIn;
    }
    alert('Invalid Credentials');
    return this.isUserLoggedIn;
  } 
  canActivate(): boolean {
    return this.isUserLoggedIn;
  }
}
