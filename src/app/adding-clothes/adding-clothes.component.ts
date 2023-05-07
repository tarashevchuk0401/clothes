import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Cloth } from '../shared/models/Cloth';

@Component({
  selector: 'app-adding-clothes',
  templateUrl: './adding-clothes.component.html',
  styleUrls: ['./adding-clothes.component.css']
})
export class AddingClothesComponent implements OnInit {

  clothes: Cloth[] = [];

  constructor(private server: ServerService){}

  ngOnInit(): void {
    this.server.getAllItems().subscribe(d => {
      this.clothes = d;
      console.log(this.clothes)
    });
   
  }

  onFormSubmit(addingCloth: NgForm){
    let newItem: Cloth = {
      tag: addingCloth.value.tag,
      name:addingCloth.value.name,
      description: addingCloth.value.description,
      price: addingCloth.value.price,
      inCart: false, 
      quantityInCart: 0,
      imageNumber: addingCloth.value.imageNumber, 
    }

    this.server.addItem(newItem).subscribe()
  }

  deleteItem(id: string){
    this.server.deleteItem(id).subscribe()
  }
}
