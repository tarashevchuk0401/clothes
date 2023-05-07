import { Component, OnInit } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  clothesInCart: Cloth[] = [];
  totalPrice: number = 0;

  constructor(private server: ServerService) {
  }

  ngOnInit(): void {
    this.getAllInCart();

    console.log(this.clothesInCart)
  }

  getAllInCart() {
    this.server.getAllItems().pipe(
      map(item => item.filter(i => {
        if (i.quantityInCart > 0) {
          return i;
        }
      }))
    ).subscribe(d => {
      this.clothesInCart = d;
      this.calculateTotalPrice();
      console.log(this.totalPrice)

    })
  }

  calculateTotalPrice() {
    let arrOfPrice = this.clothesInCart.map(item => item.price * item.quantityInCart);
    let sum = arrOfPrice.reduce((accum, currentValue) => accum += currentValue);
    this.totalPrice = sum;
  }

  removeFromCart(id: string) {
    this.server.changeQuantityInCart(id, 0).subscribe(d => this.getAllInCart());

  }

}

