import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchTerm: String = '';
  destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private service: ClothesServiceService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroyed$)).subscribe(params => {
      if (params['searchTern'])
        this.searchTerm = params['searchTerm'];
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  search(): void {
    if (this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm)
  }

}
