import { Component,  OnInit} from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-active-cars',
  templateUrl: './active-cars.component.html',
  styleUrls: ['./active-cars.component.scss']
})
export class ActiveCarsComponent implements OnInit {
  activeCars: Car[] = []
  // cars.filter(car => !car.isPassedCheckup)

  constructor(private carService: CarService) {}

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.activeCars = cars.filter((car: Car) => !car.isPassedCheckup))
  }

  ngOnInit(): void {
    this.getCars();
  }
}
