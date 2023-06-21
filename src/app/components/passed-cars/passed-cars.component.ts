import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-passed-cars',
  templateUrl: './passed-cars.component.html',
  styleUrls: ['./passed-cars.component.scss']
})
export class PassedCarsComponent implements OnInit {
  passedCars: Car[] = []
  // cars.filter(car => car.isPassedCheckup)

  constructor(private carService: CarService) {}

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.passedCars = cars.filter(car => car.isPassedCheckup));
  }

  ngOnInit(): void {
    this.getCars();
  }
}
