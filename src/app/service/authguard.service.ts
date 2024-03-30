import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem('user') != "No debe estar aca") {
      return true;
    } else {
        this.router.navigateByUrl('login')
      return false;
    }
  }
}
