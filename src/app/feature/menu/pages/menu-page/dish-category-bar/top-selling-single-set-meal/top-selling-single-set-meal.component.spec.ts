import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingSingleSetMealComponent } from './top-selling-single-set-meal.component';

describe('TopSellingSingleSetMealComponent', () => {
  let component: TopSellingSingleSetMealComponent;
  let fixture: ComponentFixture<TopSellingSingleSetMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSellingSingleSetMealComponent]
    });
    fixture = TestBed.createComponent(TopSellingSingleSetMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
