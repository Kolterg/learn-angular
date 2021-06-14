import {Component, Input} from '@angular/core';
import {User} from "../../models/User";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input()
  chosenUser: User;

  constructor(private dataTransferService: DataTransferService) { }

  choseUser() {
    this.dataTransferService.state.next(this.chosenUser.username);
  }
}
