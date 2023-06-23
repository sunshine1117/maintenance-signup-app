import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Car } from '../types/car';
import { CARS } from '../cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = CARS
  private carsUrl = 'api/cars';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
   
    return this.http.get<Car[]>(this.carsUrl);
  }

  addCar(car: Car): Observable<Car> {
    const newCar: Car = {
      ...car,
      isPassedCheckup: false,
    }

    return this.http.post<Car>(this.carsUrl, newCar, this.httpOptions);
  }
}


