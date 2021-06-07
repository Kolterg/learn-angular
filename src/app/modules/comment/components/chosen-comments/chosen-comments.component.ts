import { Component, OnInit } from '@angular/core';
import {Comment} from "../../../Comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-chosen-comments',
  templateUrl: './chosen-comments.component.html',
  styleUrls: ['./chosen-comments.component.css']
})
export class ChosenCommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getChosenComment(params.id).subscribe(value => this.comments = value);
    });
  }

  ngOnInit(): void {
  }

}
