import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorridgeComponent } from './porridge.component';

describe('PorridgeComponent', () => {
  let component: PorridgeComponent;
  let fixture: ComponentFixture<PorridgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorridgeComponent]
    });
    fixture = TestBed.createComponent(PorridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
