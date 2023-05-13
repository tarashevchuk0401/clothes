import { Component, OnInit } from '@angular/core';
import { Cloth } from '../shared/models/Cloth';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, filter, interval, map, of, takeUntil, toArray } from 'rxjs';
import { ServerService } from '../services/server.service';
import { UnsubscribingService } from '../services/unsubscribing.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends UnsubscribingService implements OnInit {

  clothes: Cloth[] = [];
  MySearchTerm: string = '';
  quantityToCatr: number = 0;
  activeTag = 'all';

  constructor(
    private route: ActivatedRoute, private server: ServerService) {
    super()
  }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.server.getAllItems().pipe(takeUntil(this.unsubscribe$)).subscribe(d => {
      this.activeTag = 'all';
      this.clothes = d
    })
  }

  search() {
    this.server.getAllItems().pipe(
      (takeUntil(this.unsubscribe$)),
      map(item => item.filter(i => {
        if ((i.name.toUpperCase()).includes(this.MySearchTerm.toUpperCase())
          || (i.tag.toUpperCase()).includes(this.MySearchTerm.toUpperCase())
          || (i.description.toUpperCase()).includes(this.MySearchTerm.toUpperCase())) {
          return i;
        }
      }))
    ).subscribe(d => {
      console.log(this.MySearchTerm)
      this.clothes = d
    })
  }

  searchByTag(tag: string) {
    this.server.getAllItems().pipe(
      (takeUntil(this.unsubscribe$)),
      map(item => item.filter(i => {
        if (i.tag === tag) {
          this.activeTag = tag;
          return i;
        }
      }))
    ).subscribe(d => this.clothes = d)
  }

  addToCart(id: string, newQuantity: string) {
    this.server.changeQuantityInCart(id, +newQuantity).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(d => console.log(d))
  }

}


