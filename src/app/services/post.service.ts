import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../moduls/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(uId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${uId}`)
  }
}
