import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor() { }

  logIn(){
    sessionStorage.setItem('isAuthenticated', 'true');
  }

  logOut(){
    sessionStorage.setItem('isAuthenticated', '');
  }


}
