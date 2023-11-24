import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoryBarComponent } from './dish-category-bar.component';

describe('DishCategoryBarComponent', () => {
  let component: DishCategoryBarComponent;
  let fixture: ComponentFixture<DishCategoryBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishCategoryBarComponent]
    });
    fixture = TestBed.createComponent(DishCategoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
