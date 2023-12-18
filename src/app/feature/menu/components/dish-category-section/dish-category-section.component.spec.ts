import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategorySectionComponent } from './dish-category-section.component';

describe('RestaurantMenuComponent', () => {
  let component: DishCategorySectionComponent;
  let fixture: ComponentFixture<DishCategorySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishCategorySectionComponent],
    });
    fixture = TestBed.createComponent(DishCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
