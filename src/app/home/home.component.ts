import { Component } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clothes: Cloth[] = [];
  addedClothes : Cloth[] = [];
  addedItems:number = 0 ;

  // visibleAll: boolean = true;
  // visibleSearch: boolean = false;

  // res: Cloth[] = [];

  constructor(private service: ClothesServiceService,
    private route: ActivatedRoute, private subjectService: SubjectService) { }

  ngOnInit() {
    //  this.route.params.subscribe(params => {
    //   if(params['searchTerm']) 
    //   this.clothes = this.service.getAll()
    //  })

    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.clothes = this.service.getBySearch(params['searchTerm']);
      else if (params['tag'])
        this.clothes = this.service.getAllByTags(params['tag']);
        else if(params['page'])
        this.clothes = this.service.getById(params['page'])
      else
        this.clothes = this.service.getAll()

    })
  }

  addToCart(id: number){

    this.clothes[id].addedToCart = true;
    this.addedClothes.push(this.clothes[id]);
    console.log(this.addedClothes);
    console.log(this.clothes[id].addedToCart);

  }

  sendToCart(){
    this.subjectService.send(this.addedClothes);
  }





  // ngOnInit() {

  //   this.service.getAll().subscribe((d: any) => {
  //     this.clothes = d;
  //   })

  // }


  // show(text: any) {
  //   this.res = [];
  //   this.clothes.filter(item => {
  //     if (item.tag.includes(text.toLowerCase()) || (item.name.includes(text.toLowerCase())))
  //       this.res.push(item)
  //   });
  //   this.visibleAll = false;
  //   this.visibleSearch = true;
  // }

  //   reset(){
  //     this.visibleAll = true;
  //     this.visibleSearch = false;
  //   }



}

