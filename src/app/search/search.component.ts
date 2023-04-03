import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothesServiceService } from '../services/clothes-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: String = '';

  constructor(private route: ActivatedRoute,
    private service: ClothesServiceService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['searchTern'])
        this.searchTerm = params['searchTerm'];

    })
  }

  search(): void {
    if (this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm)
  }

}
