import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixMatchComboBundlesComponent } from './mix-match-combo-bundles.component';

describe('MixMatchComboBundlesComponent', () => {
  let component: MixMatchComboBundlesComponent;
  let fixture: ComponentFixture<MixMatchComboBundlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixMatchComboBundlesComponent]
    });
    fixture = TestBed.createComponent(MixMatchComboBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
