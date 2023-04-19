import { Component, OnInit } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  clothesInCart: Cloth[] =[];
  allClothes: Cloth[] =[];

  constructor(private clothesService: ClothesServiceService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.allClothes = this.activatedRoute.snapshot.data['allClothes'];
    this.clothesInCart = this.allClothes.filter(item => item.inCart === true)

  }


}

