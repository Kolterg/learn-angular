import {Component, Input} from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent {

  @Input()
  post: Post;

  constructor() { }
}
