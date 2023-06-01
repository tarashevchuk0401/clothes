import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  logInForm: FormGroup;

  adminName:string = 'admin';
  adminPassword = '1234'


  constructor(private auth: AuthService, private router: Router){
    this.logInForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
    })
  }
  submit() {
    if (this.logInForm.value.name === this.adminName && this.logInForm.value.password === this.adminPassword) {
      this.auth.logIn();
      this.router.navigate(['home']);
    }
    else alert('name: admin ; password: 1234');
  }


}
