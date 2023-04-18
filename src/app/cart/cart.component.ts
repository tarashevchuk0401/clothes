import { Component, OnInit } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  clothesInCart: Cloth[] =[];

  constructor(private clothesService: ClothesServiceService) { }

  ngOnInit(): void {
      this.clothesInCart = this.clothesService.getAll();
      console.log(this.clothesInCart);
  }


}

