import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumEditionSetComponent } from './premium-edition-set.component';

describe('PremiumEditionSetComponent', () => {
  let component: PremiumEditionSetComponent;
  let fixture: ComponentFixture<PremiumEditionSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumEditionSetComponent]
    });
    fixture = TestBed.createComponent(PremiumEditionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
