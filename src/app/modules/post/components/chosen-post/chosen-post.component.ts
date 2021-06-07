import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../Post";

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
