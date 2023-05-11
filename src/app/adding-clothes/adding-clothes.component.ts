import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Cloth } from '../shared/models/Cloth';

@Component({
  selector: 'app-adding-clothes',
  templateUrl: './adding-clothes.component.html',
  styleUrls: ['./adding-clothes.component.scss']
})
export class AddingClothesComponent implements OnInit {

  clothes: Cloth[] = [];
  description: string = '';
  imageNumber: string = '';
  formValidation: boolean = false;
  showError: boolean = false;

  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.server.getAllItems().subscribe(d => {
      this.clothes = d;
    });

  }

  onFormSubmit(addingCloth: NgForm) {
    let newItem: Cloth = {
      tag: addingCloth.value.tag,
      name: addingCloth.value.name,
      description: this.description,
      price: addingCloth.value.price,
      inCart: false,
      quantityInCart: 0,
      imageNumber: this.imageNumber,
    }

    if (addingCloth.form.status === 'VALID') {
      this.server.addItem(newItem).subscribe(data => {
        this.getAllItems();
        addingCloth.reset();
      });

    }
    else this.showError = true;
  }

  deleteItem(id: string) {
    this.server.deleteItem(id).subscribe(d => this.getAllItems())
  }
}
