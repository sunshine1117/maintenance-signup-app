import { Injectable } from '@angular/core';
import { Car } from '../types/car';
import { CarService } from '../services/car.service';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  displayStyle: string = "";
  cars: Car[] = [];

  constructor(private carService: CarService) {
    const savedCars = localStorage.getItem("cars");

    if(savedCars) {
      this.cars = JSON.parse(savedCars);
    } else {
      this.getCars();
    }
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => {
        this.cars = cars
    })
  }

  getActiveCars(): Car[] {
    const activeCars = this.cars.filter(car => !car.isPassedCheckup);
    return activeCars;
  }

  getPassiveCars(): Car[] {
    return this.cars.filter(car => car.isPassedCheckup)
  }

  addCar(car: Car) {
    this.carService.addCar({...car, id: this.cars.length + 1, isPassedCheckup: false})
      .subscribe((car: Car) => {
        this.cars.push(car)
        localStorage.setItem('cars', JSON.stringify(this.cars));
      });
    this.displayStyle = "none";
  }

  openModal() {
    this.displayStyle = "block";
  }

  closeModal(e: Event) {
    if((e.target as HTMLElement)?.classList.contains("modal")
    ||(e.target as HTMLElement)?.classList.contains("btn-close")) {
      this.displayStyle = "none";
    };
  }
}
