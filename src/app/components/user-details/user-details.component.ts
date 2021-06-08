import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../modules/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private router: Router, private activatedRout: ActivatedRoute) {
    this.activatedRout.params.subscribe(params => {
      this.user = this.router.getCurrentNavigation()?.extras.state as User;
    })
  }

  // constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  //   this.activatedRoute.params.subscribe(params => {
  //     this.userService.getUser(params.id).subscribe(value => this.user = value)
  //   });
  // }

  ngOnInit(): void {
  }

}
