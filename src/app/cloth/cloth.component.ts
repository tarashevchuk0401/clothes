import { Component, OnInit } from '@angular/core';
import { Cloth } from '../shared/models/Cloth';
import { ClothesServiceService } from '../services/clothes-service.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit{

  clothes: Cloth[] = [];
  res: Cloth[] = [];

  constructor(private clothesService: ClothesServiceService){}

  ngOnInit(): void {
    this.clothes = this.clothesService.getAll()
    }

    
  }



