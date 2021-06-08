import { Component } from '@angular/core';
import {Post} from "../../modules/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.post = this.router.getCurrentNavigation()?.extras.state as Post;
      } else {
        this.postService.getPost(params.id).subscribe(value => this.post = value);
      }
    });
  }
}
