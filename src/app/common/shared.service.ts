import { Injectable, OnInit } from '@angular/core';
import { Car } from '../types/car';
import { CarService } from '../services/car.service';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  displayStyle: string = "";
  cars: Car[] = [];

  constructor(private carService: CarService) {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars)
  }

  getActiveCars(): Car[] {
    const activeCars = this.cars.filter(car => !car.isPassedCheckup);
    console.log(activeCars);
    return activeCars;
  }

  getPassiveCars(): Car[] {
    return this.cars.filter(car => car.isPassedCheckup)
  }

  onAdd(car: Car) {
    this.carService.addCar(car)
      .subscribe(car => {
        this.cars.push(car);
      })
  }

  openModal() {
    this.displayStyle = "block";
  }

  closeModal() {
    this.displayStyle = "none";
  }
}