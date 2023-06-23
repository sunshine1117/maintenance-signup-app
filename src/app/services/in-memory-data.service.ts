import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from '../types/car';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      {
        id: 1,
        model: 'Honda',
        owner: 'Jame Mark',
        isPassedCheckup: false,
      },
      {
        id: 2,
        model: 'Mahindra Nissan',
        owner: 'James Karole',
        isPassedCheckup: true,
      },
      {
        id: 3,
        model: 'Datsun Toyota',
        owner: 'Erik Dolevgas',
        isPassedCheckup: false,
      },
      {
        id: 4,
        model: 'Volkswagen Skoda',
        owner: 'Lorena Kaprisi',
        isPassedCheckup: true,
      },
      {
        id: 5,
        model: 'BMW 503',
        owner: 'Renata De Lovene',
        isPassedCheckup: false,
      },
      {
        id: 6,
        model: 'Bugatti Type 55',
        owner: 'Gulya Ahmedli',
        isPassedCheckup: true,
      },
      {
        id: 7,
        model: 'Chevrolet Camaro',
        owner: 'Andrey Vasilov',
        isPassedCheckup: false,
      },
      {
        id: 8,
        model: 'Ford Explorer',
        owner: 'Natali Shevchenko',
        isPassedCheckup: true,
      },
      {
        id: 9,
        model: 'Ferrari 250 GTO',
        owner: 'Ruslan Maharramli',
        isPassedCheckup: false,
      },
      {
        id: 10,
        model: 'Dodge Viper',
        owner: 'Lyubava Larisova',
        isPassedCheckup: false,
      },
    ]
    return {cars};
  }
}