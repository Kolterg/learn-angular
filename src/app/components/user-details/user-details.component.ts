import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../modules/User";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  chosenUser: User;

  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit(): void {
  }

  choseUser() {
    this.dataTransferService.state.next(this.chosenUser.username);
  }
}
