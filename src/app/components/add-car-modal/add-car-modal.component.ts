import { Component } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-add-car-modal',
  templateUrl: './add-car-modal.component.html',
  styleUrls: ['./add-car-modal.component.scss']
})
export class AddCarModalComponent {
  car: Car = {
    id: 0,
    isPassedCheckup: false,
    model: "",
    owner: "",
  }

  constructor(public sharedService: SharedService) {}

  
}
