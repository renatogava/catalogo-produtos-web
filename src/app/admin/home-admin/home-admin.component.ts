import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home-admin',
  styleUrl: './home-admin.component.css',
  templateUrl: './home-admin.component.html',
})
export class HomeAdminComponent {

  auth = inject(AuthService);
  router = inject(Router);

  irParaProdutos() {
    this.router.navigate(['/admin/produtos']);
  }
  
  sair() {
    this.auth.logout();  
    this.router.navigate(['/login']);
  }
}
