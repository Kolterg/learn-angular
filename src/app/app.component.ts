import { Component } from '@angular/core';

// 2
// выводите всех юзеров, под каждым юзером его посты (все разделяете на компоненты, делаете сервисы и интерфейсы)
//
// кто не знает как с плейсхолдера вытянуть массив постов по id юзера:
// http://jsonplaceholder.typicode.com/posts?usersId=1 посты юзера с id 1

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
}
