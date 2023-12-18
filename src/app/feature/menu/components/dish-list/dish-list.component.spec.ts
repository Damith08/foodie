import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishListComponent } from './dish-List.component';

describe('DishListComponent', () => {
  let component: DishListComponent;
  let fixture: ComponentFixture<DishListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishListComponent],
    });
    fixture = TestBed.createComponent(DishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
