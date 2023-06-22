import { Component } from '@angular/core';

import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-add-car-modal',
  templateUrl: './add-car-modal.component.html',
  styleUrls: ['./add-car-modal.component.scss']
})
export class AddCarModalComponent {
  car: Car = {
    model: "",
    owner: "",
  }

  constructor(private carService: CarService) {}

  onAdd() {
    this.carService.addCar(this.car)
  }
}
