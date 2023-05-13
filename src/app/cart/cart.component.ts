import { Component, DoCheck, OnInit } from '@angular/core';
import { Cloth } from '../shared/models/Cloth';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';
import { map, takeUntil } from 'rxjs';
import { UnsubscribingService } from '../services/unsubscribing.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends UnsubscribingService implements OnInit {

  clothesInCart: Cloth[] = [];
  totalPrice: number = 0;

  constructor(private server: ServerService, private subjectService: SubjectService) {
    super()
  }

  ngOnInit(): void {
    this.getAllInCart();

    // this.subjectService.send(this.clothesInCart.length);
    // console.log(this.clothesInCart.length)

  }

 

  getAllInCart() {
    this.server.getAllItems().pipe(
      (takeUntil(this.unsubscribe$)),
      map(item => item.filter(i => {
        if (i.quantityInCart > 0) {
          return i;
        }
      }))
    ).subscribe(d => {
      this.clothesInCart = d;
      this.calculateTotalPrice();
      this.subjectService.send(this.clothesInCart.length);

    })
  }

  calculateTotalPrice() {
    let arrOfPrice = this.clothesInCart.map(item => item.price * item.quantityInCart);
    let sum = arrOfPrice.reduce((accum, currentValue) => accum += currentValue);
    this.totalPrice = sum;
  }

  removeFromCart(id: string) {
    this.server.changeQuantityInCart(id, 0).pipe(takeUntil(this.unsubscribe$)).subscribe(d => this.getAllInCart());
  }

}

