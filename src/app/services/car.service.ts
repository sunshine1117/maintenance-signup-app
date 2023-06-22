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
    const newCar: Car = {
      id: this.cars.length + 1,
      isPassedCheckup: false,
      ...car
    }

    this.cars.push(newCar);

    console.log(this.cars)
  }
}
