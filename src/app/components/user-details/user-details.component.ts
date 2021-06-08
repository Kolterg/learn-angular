import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../modules/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user: User;

  constructor(private router: Router, private activatedRout: ActivatedRoute, private userService: UserService) {
    this.activatedRout.params.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.user = this.router.getCurrentNavigation()?.extras.state as User;
      } else {
        this.userService.getUser(params.id).subscribe(value => this.user = value)
      }
    });
  }
}
