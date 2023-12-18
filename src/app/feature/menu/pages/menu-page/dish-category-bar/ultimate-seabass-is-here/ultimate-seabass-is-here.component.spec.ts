import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateSeabassIsHereComponent } from './ultimate-seabass-is-here.component';

describe('UltimateSeabassIsHereComponent', () => {
  let component: UltimateSeabassIsHereComponent;
  let fixture: ComponentFixture<UltimateSeabassIsHereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimateSeabassIsHereComponent]
    });
    fixture = TestBed.createComponent(UltimateSeabassIsHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
