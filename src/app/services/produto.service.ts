import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Produto } from '../models/produto.model';
import { AuthService } from './auth.service';

@Service()
export class ProdutoService {

    private http = inject(HttpClient);

    private auth = inject(AuthService);

    listar() {
        return this.http.get<Produto[]>(`${environment.apiUrl}/api/produtos`);
    }

    listarAdmin() {
        return this.http.get<Produto[]>(
            `${environment.apiUrl}/api/admin/produtos`,
            { headers: this.auth.cabecalho() });
    }

    buscarPorId(id: number) {
        return this.http.get<Produto>(
            `${environment.apiUrl}/api/admin/produtos/${id}`,
            { headers: this.auth.cabecalho() });
    }

    criar(produto: Produto) {
        return this.http.post<Produto>(
            `${environment.apiUrl}/api/admin/produtos`,
            produto,
            { headers: this.auth.cabecalho() });
    }

    atualizar(id: number, produto: Produto) {
        return this.http.put<void>(
            `${environment.apiUrl}/api/admin/produtos/${id}`,
            produto,
            { headers: this.auth.cabecalho() });
    }

    remover(id: number) {
        return this.http.delete<void>(
            `${environment.apiUrl}/api/admin/produtos/${id}`,
            { headers: this.auth.cabecalho() });
    }
}