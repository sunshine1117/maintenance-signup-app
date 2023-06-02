import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedCarsComponent } from './passed-cars.component';

describe('PassedCarsComponent', () => {
  let component: PassedCarsComponent;
  let fixture: ComponentFixture<PassedCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassedCarsComponent]
    });
    fixture = TestBed.createComponent(PassedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
