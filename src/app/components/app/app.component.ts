import { Component } from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';

  name: string;

  constructor(private dataTransferService: DataTransferService) {
    this.name = this.dataTransferService.state.getValue();
  }
}
