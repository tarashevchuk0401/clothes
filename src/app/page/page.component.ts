import { Component, OnInit } from '@angular/core';
import { Cloth } from '../shared/models/Cloth';
import { ActivatedRoute } from '@angular/router';
import { Subject, filter, map, takeUntil, tap } from 'rxjs';
import { ServerService } from '../services/server.service';
import { UnsubscribingService } from '../services/unsubscribing.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent extends UnsubscribingService implements OnInit {

  currentId: string = this.route.snapshot.params['id']
  currentItem: Cloth[] = [];

  constructor(private server: ServerService, private route: ActivatedRoute) { 
    super()
  }

  ngOnInit(): void {
    this.server.getAllItems().pipe(
      (takeUntil(this.unsubscribe$)),
      map(item => item.filter(i => i.id == this.currentId))
    ).subscribe(data => this.currentItem = data)
  }

  
  addToCart(id: string, newQuantity: string){
    this.server.changeQuantityInCart(id, +newQuantity).pipe(takeUntil(this.unsubscribe$)).subscribe( d => console.log(d))
  }

}
