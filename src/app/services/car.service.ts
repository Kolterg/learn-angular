import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../modules/Car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = 'http://92.253.239.109/api/v1/cars';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url);
  }

    postCars(car: Car) {
    this.httpClient.post(this.url, car);
  }
}
