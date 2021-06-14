import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../modules/Car";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  car: Car;

  modelControl = new FormControl('M', [
    Validators.required,
    this.customValidator
  ]);
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
  }

  add() {
    this.car.model = this.myForm.controls.model.value;
    this.car.year = this.myForm.controls.year.value;
    this.car.price = this.myForm.controls.price.value;
    this.carService.postCars(this.car)
  }

  customValidator(input: AbstractControl) {
    if (typeof input.value != 'string') {
      console.log(input.value);
      return {error: true}
    }
    return null
  }

}
