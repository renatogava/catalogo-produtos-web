import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  auth = inject(AuthService);
  router = inject(Router);

  usuario = '';
  senha = '';
  erro = '';

  entrar() {
    this.auth.login(this.usuario, this.senha).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        this.erro = 'Usuário ou senha inválidos';
      }
    });
  }
}
