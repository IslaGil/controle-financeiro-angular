import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  login() {

  if (!this.email || !this.senha) {
    this.erro = 'Preencha todos os campos';
    return;
  }

  if (this.email === 'admin@email.com' && this.senha === '123456') {

    // 🔥 salva login
    localStorage.setItem('usuario_logado', 'true');

    this.router.navigate(['/dashboard']);

  } else {
    this.erro = 'Email ou senha inválidos';
  }
}
}