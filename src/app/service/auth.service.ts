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

  private username: string = "No debes estar aca";
  tokenResp = null;

  closeSesion(){
    localStorage.setItem('token', "");
    this.router.navigateByUrl('login');
    this.deleteUser();
  }

  deleteUser(){
    localStorage.setItem('user', "No debes estar aca");
  }
}
