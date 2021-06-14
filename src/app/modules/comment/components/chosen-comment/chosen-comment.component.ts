import {Component, Input} from '@angular/core';
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-chosen-comment',
  templateUrl: './chosen-comment.component.html',
  styleUrls: ['./chosen-comment.component.css']
})
export class ChosenCommentComponent {

  @Input()
  comment: Comment;

  constructor() { }
}
