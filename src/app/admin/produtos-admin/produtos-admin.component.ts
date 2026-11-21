import { Component, inject, signal } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-produtos-admin',
  styleUrl: './produtos-admin.component.css',
  templateUrl: './produtos-admin.component.html',
})
export class ProdutosAdminComponent {

  service = inject(ProdutoService);
  produtos = signal<Produto[]>([]);

  router = inject(Router);

  ngOnInit() {

    this.carregar();

  }

  novo() {
    this.router.navigate(['/admin/produtos/novo']);
  }

  editar(id: number) {
    this.router.navigate([`/admin/produtos/${id}`]);
  }

  remover(id: number) {
    if (confirm('Deseja realmente remover este produto?')) {
      this.service.remover(id).subscribe(() => {
        this.carregar();
      });
    }
  }

  carregar() {
    this.service.listarAdmin().subscribe((produtos) => {
      this.produtos.set(produtos);
    });
  }

}
