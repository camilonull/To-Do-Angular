import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  mensaje: string = '';
  username: string = '';
  email: string = '';
  password: string = '';


  constructor(private router: Router, private authService: AuthService) {}

  togglePasswordVisibility(passwordInput: HTMLInputElement): void {
    const passwordType = passwordInput.type;
    passwordInput.type = passwordType === 'password' ? 'text' : 'password';
  }

  /*async register() {
    this.authService
      .register(this.username, this.email, this.password)
      .then((mensaje) => {
        this.mensaje = mensaje;
      })
      .catch((error) => {
        // Manejar el error si es necesario
        this.mensaje = error; // o algún otro mensaje de error predeterminado
      });
  }
*/
  back() {
    this.router.navigateByUrl('login');
  }
}
