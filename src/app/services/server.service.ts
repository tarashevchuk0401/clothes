import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cloth } from '../shared/models/Cloth';
import { Observable, map, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  pathUrl: string = 'https://clothes-805bc-default-rtdb.firebaseio.com/clothes.json'

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any>{
    return this.http.get(this.pathUrl).pipe(map(response => {
      let post = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {

          post.push({ ...response[key], id: key });
        }
      }
      return post
    }));
   }

  addItem(newItem: Cloth) {
    return this.http.post(this.pathUrl, newItem)
  }

  deleteItem(id: string){
      return this.http.delete('https://clothes-805bc-default-rtdb.firebaseio.com/clothes/' + id + '.json')
  }

  changeQuantityInCart(id:string, newQuantity: number): Observable<any>{
     return  this.http.patch(('https://clothes-805bc-default-rtdb.firebaseio.com/clothes/' + id + '.json'), {quantityInCart: newQuantity});
  }


}
