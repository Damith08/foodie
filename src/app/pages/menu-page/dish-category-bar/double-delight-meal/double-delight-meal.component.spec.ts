import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDelightMealComponent } from './double-delight-meal.component';

describe('DoubleDelightMealComponent', () => {
  let component: DoubleDelightMealComponent;
  let fixture: ComponentFixture<DoubleDelightMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleDelightMealComponent]
    });
    fixture = TestBed.createComponent(DoubleDelightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
