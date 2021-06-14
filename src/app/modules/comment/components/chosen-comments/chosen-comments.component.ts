import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../models/Comment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-chosen-comments',
  templateUrl: './chosen-comments.component.html',
  styleUrls: ['./chosen-comments.component.css']
})
export class ChosenCommentsComponent {

  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getChosenComment(params.id).subscribe(value => this.comments = value)
    });
  }
}
