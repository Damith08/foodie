import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadeBeancurdComponent } from './handmade-beancurd.component';

describe('HandmadeBeancurdComponent', () => {
  let component: HandmadeBeancurdComponent;
  let fixture: ComponentFixture<HandmadeBeancurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandmadeBeancurdComponent]
    });
    fixture = TestBed.createComponent(HandmadeBeancurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
