import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../../Post";

@Component({
  selector: 'app-chosen-posts',
  templateUrl: './chosen-posts.component.html',
  styleUrls: ['./chosen-posts.component.css']
})
export class ChosenPostsComponent {

  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getChosenPosts(params.id).subscribe(value => this.posts = value)
    });
  }
}
