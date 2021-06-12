import { Component, OnInit } from '@angular/core';
import {User} from "../../modules/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  chosenUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }

  catchUser(value: any) {
    this.chosenUser = value;
  }
}
