import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { ChosenCommentsComponent } from './components/chosen-comments/chosen-comments.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "./services/comment.service";
import { ChosenCommentComponent } from './components/chosen-comment/chosen-comment.component';


@NgModule({
  declarations: [
    ChosenCommentsComponent,
    ChosenCommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [CommentService]
})
export class CommentModule { }
