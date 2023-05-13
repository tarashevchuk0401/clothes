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

  constructor(private auth: AuthService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.behaviorSubject.subscribe(data => this.itemsInCart = data)
  }

  logout() {
    sessionStorage.setItem('isAuthenticated', 'false')
    this.auth.logOut();
  }
}  
