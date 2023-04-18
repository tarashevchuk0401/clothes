import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cloth } from '../shared/models/Cloth';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ClothesServiceService {

  constructor(private http: HttpClient) { }

  getAllByTags(tag: string): Cloth[] {

    return tag == 'All' ?
      this.getAll() :
      this.getAll().filter(item => item.tag?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'shoes', count: 2 },
      { name: 'jeans', count: 2 },
      { name: 't-shirts', count: 2 },
    ]
  }

  getBySearch(searchTerm: string): Cloth[]{
   return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getById(num: number){
    return this.getAll().filter(item => item.id == num)
  }


  // getAll(){
  //  return this.http.get('assets/clothesList.json')
  // }

  getAll(): Cloth[] {
    return [
      {
        id: 1,
        tag: "t-shirts",
        name: "Blue Ocean",
        imageUrl: "assets/img/1.jpg",
        description: "T-Shirt from new collection",
        price: 11.99,
        inCart: false,
      },
      {
        id: 2,
        tag: "t-shirts",
        name: "Gray shadow ",
        imageUrl: "assets/img/2.jpg",
        description: "T-Shirt from new collection",
        price: 1.99,
        inCart: false,
      },
      {
        id: 3,
        tag: "shoes",
        name: "City Cros",
        imageUrl: "assets/img/3.jpg",
        description: "T-Shirt",
        price: 11.99,
        inCart: false,
      },
      {
        id: 4,
        tag: "shoes",
        name: "Vintage",
        imageUrl: "assets/img/4.jpg",
        description: "Brown shoes  by Paolo Bettini ",
        price: 11.99,
        inCart: false,
      },
      {
        id: 5,
        tag: "jeans",
        name: "Regular",
        imageUrl: "assets/img/5.jpg",
        description: "New collection  ",
        price: 11.99,
        inCart: false,
      },
      {
        id: 6,
        tag: "jeans",
        name: "Black Pants",
        imageUrl: "assets/img/6.jpg",
        description: "Style jeans for man",
        price: 11.99,
        inCart: false,
      },
      {
        id: 7,
        tag: "t-shirts",
        name: "Green",
        imageUrl: "assets/img/7.jpg",
        description: "T-Shirt from new collection",
        price: 11.99,
        inCart: true,
      },

    ]
  }





}
