import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodlesComponent } from './noodles.component';

describe('NoodlesComponent', () => {
  let component: NoodlesComponent;
  let fixture: ComponentFixture<NoodlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoodlesComponent]
    });
    fixture = TestBed.createComponent(NoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
