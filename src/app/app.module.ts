import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './component/cars/cars.component';
import { UsersComponent } from './component/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
