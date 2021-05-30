import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../moduls/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>(this.url)
  }
}
