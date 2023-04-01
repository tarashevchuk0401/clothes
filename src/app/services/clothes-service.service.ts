import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cloth } from '../shared/models/Cloth';


@Injectable({
  providedIn: 'root'
})
export class ClothesServiceService {

  constructor(private http: HttpClient){}

  getAll(){
   return this.http.get('assets/clothesList.json')
  }
 

  
}
