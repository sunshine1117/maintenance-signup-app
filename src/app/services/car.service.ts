import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Car } from '../types/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsUrl = 'api/cars';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
    .pipe(catchError(this.handleError));
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = "";

    if(error.error instanceof ErrorEvent) {
      errorMessage =  `Error: ${error.error.message}`
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage)

    return throwError(() => errorMessage);
  }
}
