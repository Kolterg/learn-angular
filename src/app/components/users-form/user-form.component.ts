import { Component, OnInit } from '@angular/core';
import {User} from "../../modules/User";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  users: User[];
  uId: number;

  name = new FormControl('');

  myForm = new FormGroup({
    name: this.name
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }

  save() {
    this.uId = this.myForm.controls.name.value;
  }
}
