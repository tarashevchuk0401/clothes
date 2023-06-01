import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingClothesComponent } from './adding-clothes.component';

describe('AddingClothesComponent', () => {
  let component: AddingClothesComponent;
  let fixture: ComponentFixture<AddingClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingClothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
