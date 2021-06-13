import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../modules/Car";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  car: Car;

  modelControl = new FormControl('M');
  yearControl = new FormControl('Y');
  priceControl = new FormControl('P');

  myForm: FormGroup = new FormGroup({
    model: this.modelControl,
    year: this.yearControl,
    price: this.priceControl
  });

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => {
      this.cars = value;
    });
    // this.carService.postCars()
  }

  add() {
    // this.car.model = this.myForm.controls.model.value;
    // this.car.year = this.myForm.controls.year.value;
    // this.car.price = this.myForm.controls.price.value;
    // this.car.model = 'Lada';
    // this.car.year = 2004;
    // this.car.price = 5000;
    this.car = this.cars[1];
    console.log(this.car);
    this.carService.postCars(this.car);
  }


}
