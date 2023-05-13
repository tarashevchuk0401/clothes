import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Cloth } from '../shared/models/Cloth';
import { UnsubscribingService } from '../services/unsubscribing.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-adding-clothes',
  templateUrl: './adding-clothes.component.html',
  styleUrls: ['./adding-clothes.component.scss']
})
export class AddingClothesComponent extends UnsubscribingService implements OnInit {

  clothes: Cloth[] = [];
  description: string = '';
  imageNumber: string = '';
  formValidation: boolean = false;
  showError: boolean = false;

  constructor(private server: ServerService) {
    super()
   }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.server.getAllItems().pipe(takeUntil(this.unsubscribe$)).subscribe(d => {
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
      this.server.addItem(newItem).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
        this.getAllItems();
        addingCloth.reset();
      });

    }
    else this.showError = true;
  }

  deleteItem(id: string) {
    this.server.deleteItem(id).pipe(takeUntil(this.unsubscribe$)).subscribe(d => this.getAllItems())
  }
}
