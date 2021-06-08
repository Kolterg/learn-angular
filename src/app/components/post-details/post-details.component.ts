import { Component, OnInit } from '@angular/core';
import {Post} from "../../modules/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.router.getCurrentNavigation()?.extras.state as Post;
    })
  }

  /*constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params.id).subscribe(value => this.post = value);
    });
  }*/

  ngOnInit(): void {
  }

}
