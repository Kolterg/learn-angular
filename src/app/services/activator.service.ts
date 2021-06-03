import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ActivatorService implements CanActivate {

  constructor() { }

  canActivate(): boolean{
    return confirm('Sign in?');
  }
}
