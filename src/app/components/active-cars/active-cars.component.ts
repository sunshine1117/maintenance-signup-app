import { Component, Input, OnInit} from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-active-cars',
  templateUrl: './active-cars.component.html',
  styleUrls: ['./active-cars.component.scss']
})
export class ActiveCarsComponent {
  constructor(public sharedService: SharedService) {}
}
