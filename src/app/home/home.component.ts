import { Component } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { ActivatedRoute } from '@angular/router';
import { filter, map, toArray } from 'rxjs';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clothes: Cloth[] = [];
  MySearchTerm: string = '';
  quantityToCatr: number = 0;

  constructor(private service: ClothesServiceService,
    private route: ActivatedRoute, private server: ServerService) { }

  ngOnInit() {
    this.server.getAllItems().subscribe(d => this.clothes = d)
  }

  search() {
    this.server.getAllItems().pipe(
      map(item => item.filter(i => {
        if (i.name.includes(this.MySearchTerm) || i.tag.includes(this.MySearchTerm) || i.description.includes(this.MySearchTerm)) {
          return i;
        }
      }))
    ).subscribe(d => this.clothes = d)
  }

  searchByTag(tag: string){
    this.server.getAllItems().pipe(
      map(item => item.filter(i => {
        if (i.tag === tag) {
          return i;
        }
      }))
    ).subscribe(d => this.clothes = d)
  }

  addToCart(id: string, newQuantity: string){
    this.server.changeQuantityInCart(id, +newQuantity).subscribe( d => console.log(d))
  }

}


