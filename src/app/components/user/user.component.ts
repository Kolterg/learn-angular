import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../modules/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  lifting(): void {
    this.eventEmitter.emit(this.user)
  }
}
