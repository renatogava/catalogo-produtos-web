import { ChangeDetectorRef, Component, inject, Service } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-produto-admin',
  styleUrl: './produto-admin.component.css',
  templateUrl: './produto-admin.component.html',
})
export class ProdutoAdminComponent {

  produto = new Produto();

  route = inject(ActivatedRoute);
  router = inject(Router);
  service = inject(ProdutoService);
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.buscarPorId(+id).subscribe((produto) => {
        this.produto = produto;
        this.cdr.markForCheck();
      });
    }
  }

  salvar() {
    if (this.produto.id) {
      this.service.atualizar(this.produto.id, this.produto).subscribe(() => {
        this.router.navigate(['/admin/produtos']);
      });
    }
    else {
      this.service.criar(this.produto).subscribe(() => {
        this.router.navigate(['/admin/produtos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/admin/produtos']);
  }

}
