import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../moduls/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts?usersId=1'

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<Post[]>(this.url)
  }
}
