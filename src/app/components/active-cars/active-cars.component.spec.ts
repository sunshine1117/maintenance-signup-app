import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCarsComponent } from './active-cars.component';

describe('ActiveCarsComponent', () => {
  let component: ActiveCarsComponent;
  let fixture: ComponentFixture<ActiveCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveCarsComponent]
    });
    fixture = TestBed.createComponent(ActiveCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
