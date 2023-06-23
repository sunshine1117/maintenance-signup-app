import { Component, OnInit } from '@angular/core';
import { Car } from './types/car';
import { CarService } from './services/car.service';
import { SharedService } from './common/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
