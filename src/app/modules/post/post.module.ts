import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostService} from "./services/post.service";
import { ChosenPostsComponent } from './components/chosen-posts/chosen-posts.component';
import { ChosenPostComponent } from './components/chosen-post/chosen-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    ChosenPostsComponent,
    ChosenPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [PostService]
})
export class PostModule { }
