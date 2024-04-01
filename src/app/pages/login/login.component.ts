import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor( private router: Router, private authService: AuthService){
    this.items = new Observable<any[]>();
  }
  mensaje: string = '';
  username: string = '';
  password: string = '';
  modalActive: boolean = false;
  items: Observable<any[]>;

  ngOnInit(): void {
    // Accede a una colección de Firestore
  }

temporal(){
  this.router.navigateByUrl('mainPage');
}
  togglePasswordVisibility(passwordInput: HTMLInputElement): void {
    const passwordType = passwordInput.type;
    passwordInput.type = passwordType === 'password' ? 'text' : 'password';
  }

  closeModal(){
    this.modalActive = !this.modalActive;
  }

  login(){
    if(this.authService.login(this.username,this.password)){
      this.mensaje = 'Inicio de sesión exitoso';
      this.router.navigateByUrl('mainPage');
    }else{
      this.mensaje = 'Usuario o contraseña incorrectos';
    }
    
  }
}
