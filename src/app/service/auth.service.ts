import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private username: string = "cata";
  password: string = "30533"
  tokenResp = null;

  closeSesion(){
    this.router.navigateByUrl('login');
  }

  login(username: string, password: string): boolean {
    return username === this.username && password === this.password;
  }
}
