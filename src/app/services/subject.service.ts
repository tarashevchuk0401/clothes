import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  sub = new Subject();

  constructor() { }

  send(data:any){
  return  this.sub.next(data);
  }
}
