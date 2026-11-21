import { Component, inject, signal } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-home-publico',
  styleUrl: './home-publico.component.css',
  templateUrl: './home-publico.component.html',
})
export class HomePublicoComponent {

  private service = inject(ProdutoService);

  produtos = signal<Produto[]>([]);

  ngOnInit() {

    this.service.listar().subscribe((produtos) => {
      this.produtos.set(produtos);
    });
  }
}
