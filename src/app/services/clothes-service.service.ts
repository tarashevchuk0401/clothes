// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Cloth } from '../shared/models/Cloth';
// import { Tag } from '../shared/models/Tag';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClothesServiceService {

//   constructor(private http: HttpClient) { }

//   getAllByTags(tag: string): Cloth[] {

//     return tag == 'All' ?
//       this.getAll() :
//       this.getAll().filter(item => item.tag?.includes(tag));
//   }

//   getAllTags(): Tag[] {
//     return [
//       { name: 'shoes', count: 2 },
//       { name: 'jeans', count: 2 },
//       { name: 't-shirts', count: 2 },
//     ]
//   }

//   getBySearch(searchTerm: string): Cloth[]{
//    return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//   }

//   getById(num: number){
//     // return this.getAll().filter(item => item.id == num)
//   }


//   // getAll(){
//   //  return this.http.get('assets/clothesList.json')
//   // }

//   getAll(): Cloth[] {
//     return [
//       {
//         id: '',
//         tag: "t-shirts",
//         name: "Blue Ocean",
//         // imageUrl: "assets/img/1.jpg",
//         description: "T-Shirt from new collection",
//         price: 11.99,
//         inCart: false,
//       },
//       {
//         id: '',
//         tag: "t-shirts",
//         name: "Gray shadow ",
//         // imageUrl: "assets/img/2.jpg",
//         description: "T-Shirt from new collection",
//         price: 1.99,
//         inCart: false,
//       },
//       {
//         id: '',
//         tag: "shoes",
//         name: "City Cros",
//         // imageUrl: "assets/img/3.jpg",
//         description: "T-Shirt",
//         price: 11.99,
//         inCart: false,
//       },
    
//     ]
//   }





// }
