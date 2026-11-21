import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Produto } from '../models/produto.model';

@Service()
export class ProdutoService {

    private http = inject(HttpClient);

    listar() {
        return this.http.get<Produto[]>(`${environment.apiUrl}/api/produtos`);
    }
}