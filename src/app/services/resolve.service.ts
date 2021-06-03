import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any[]>{

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any[]> | Promise<any[]> | any[] {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
