import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { tap } from 'rxjs/internal/operators/tap';

@Service()
export class AuthService {

    http = inject(HttpClient);

    credentials = '';

    login (usuario: string, senha: string) {
        const basic = 'Basic ' + btoa(`${usuario}:${senha}`);

        return this.http.post(`${environment.apiUrl}/api/login`, null, {
            headers: {
                'Authorization': basic  
            }
        }).pipe(tap(() => this.credentials = basic));
    }

    cabecalho() {
        return {
            'Authorization': this.credentials
        };
    }

    estaLogado() {
        return this.credentials !== '';
    }

    logout() {
        this.credentials = '';
    }
}
