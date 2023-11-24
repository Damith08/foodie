import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentoSeriesComponent } from './bento-series.component';

describe('BentoSeriesComponent', () => {
  let component: BentoSeriesComponent;
  let fixture: ComponentFixture<BentoSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BentoSeriesComponent]
    });
    fixture = TestBed.createComponent(BentoSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
