import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClothesServiceService } from '../services/clothes-service.service';
import { Cloth } from '../shared/models/Cloth';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {

  clothes: Cloth[] = [];
  destroyed$ = new Subject<void>();

  constructor(private service: ClothesServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      if (params['id'])
        this.clothes = this.service.getById(params['id']);
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
