import { Component, OnInit } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{

  clothes: Cloth[] = [];

  constructor(private service: ClothesServiceService, private subjectService: SubjectService){}

  ngOnInit(): void {
   this.subjectService.sub.subscribe((d:any) => this.clothes = d);
   console.log(this.clothes)
  }
}
