import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Car } from '../types/car';
import { CARS } from '../cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = CARS
  constructor() { }

  getCars(): Observable<Car[]> {
   
    return of(this.cars);
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }
}
