import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../modules/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  uId: number;
  users: User[];
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(this.uId).subscribe(value => {
      this.users = value;
      this.user = this.users[0];
    });
  }
}
