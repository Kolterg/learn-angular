import { Component } from '@angular/core';

// 1
// Создать несколько массивов с объектами.
// Создать для каждого из  массивов компонент, который отрисовывает все объекты.
// для отрисовки каждого отдельного объекта создать свой компонент.
// Вывести все объекты в UI

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
}
