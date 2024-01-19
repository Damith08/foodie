import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInfoComponent } from './restaurant-info.component';

describe('RestaurantInfoComponent', () => {
  let component: RestaurantInfoComponent;
  let fixture: ComponentFixture<RestaurantInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantInfoComponent]
    });
    fixture = TestBed.createComponent(RestaurantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
