import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  sub = new Subject();
  behaviorSubject = new BehaviorSubject(0)

  constructor() { }

  send(pcs: number) {
    this.behaviorSubject.next(pcs);
  }


}
