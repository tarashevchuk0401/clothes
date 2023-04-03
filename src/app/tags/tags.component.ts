import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { NewType } from './NewType';
import { ClothesServiceService } from '../services/clothes-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements NewType {
  tags: Tag[] = [];

  constructor(private clothService: ClothesServiceService) { }

  ngOnInit() {
    this.tags = this.clothService.getAllTags();
  }
}
