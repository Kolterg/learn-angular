import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {ChosenCommentsComponent} from "../comment/components/chosen-comments/chosen-comments.component";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [
      {path: ':id', component: ChosenCommentsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
