import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {ChosenPostsComponent} from "../post/components/chosen-posts/chosen-posts.component";

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id', component: ChosenPostsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
