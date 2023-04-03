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


  // getAll(){
  //  return this.http.get('assets/clothesList.json')
  // }

  getAll(): Cloth[] {
    return [
      {
        id: 1,
        tag: "t-shirts",
        name: "Blue TEXTETXTETXTETXT",
        imageUrl: "assets/img/1.jpg",
        description: "T-Shirt",
        price: 11.99
      },
      {
        id: 2,
        tag: "t-shirts",
        name: "Blue t-shirt ",
        imageUrl: "assets/img/2.jpg",
        description: "T-Shirt",
        price: 1.99
      },
      {
        id: 3,
        tag: "shoes",
        name: "shoes",
        imageUrl: "assets/img/3.jpg",
        description: "T-Shirt",
        price: 11.99
      },
      {
        id: 4,
        tag: "shoes",
        name: "shoes TE",
        imageUrl: "assets/img/4.jpg",
        description: "T-Shirt",
        price: 11.99
      },
      {
        id: 5,
        tag: "jeans",
        name: "jeans",
        imageUrl: "assets/img/5.jpg",
        description: "T-Shirt",
        price: 11.99
      },
      {
        id: 6,
        tag: "jeans",
        name: "Blue TEXTETXTETXTETXT",
        imageUrl: "assets/img/6.jpg",
        description: "T-Shirt",
        price: 11.99
      },
      {
        id: 7,
        tag: "t-shirts",
        name: "Blue TEXTETXTETXTETXT",
        imageUrl: "assets/img/7.jpg",
        description: "T-Shirt",
        price: 11.99
      },

    ]
  }





}
