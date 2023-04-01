import { Component } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //   ANY!!!!!!!!!
  
  clothes: Cloth[] = [];

  constructor(private service: ClothesServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params =>{
    //   if(params['searchTerm'])
    
    // )}
    // this.route.params.subscribe(params =>{
    //   if(params['searchTerm'])
    // })

    this.service.getAll().subscribe((d:any) => {
      this.clothes = d;
      console.log(d[0].id)
    })
  }



}

