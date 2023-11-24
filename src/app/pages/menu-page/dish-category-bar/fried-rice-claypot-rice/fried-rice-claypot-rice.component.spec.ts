import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriedRiceClaypotRiceComponent } from './fried-rice-claypot-rice.component';

describe('FriedRiceClaypotRiceComponent', () => {
  let component: FriedRiceClaypotRiceComponent;
  let fixture: ComponentFixture<FriedRiceClaypotRiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriedRiceClaypotRiceComponent]
    });
    fixture = TestBed.createComponent(FriedRiceClaypotRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
