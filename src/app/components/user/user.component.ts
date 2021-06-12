import {Component, EventEmitter, Input,Output} from '@angular/core';
import {User} from "../../modules/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: User;

  @Output()
  eventEmitter = new EventEmitter();

  constructor() { }

  lifting(): void {
    this.eventEmitter.emit(this.user)
  }
}
