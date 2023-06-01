import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private server: ServerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // this.server.getAllItems();
  }
}
