import { Inject, Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export abstract class UnsubscribingService  implements OnDestroy{

    unsubscribe$ = new Subject<void>;
  
    constructor() { }
  
    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
}