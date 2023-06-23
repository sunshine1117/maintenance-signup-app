import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';

@Component({
  selector: 'app-passed-cars',
  templateUrl: './passed-cars.component.html',
  styleUrls: ['./passed-cars.component.scss']
})
export class PassedCarsComponent {

  constructor(public sharedService: SharedService) {}
}
