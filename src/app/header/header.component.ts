import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {

  itemsInCart: number = 0;
  isMenuOpened: boolean = false;

  constructor(public subjectService: SubjectService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.setItem('isAuthenticated', 'false')
    this.auth.logOut();
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened
  }
}  
