import { Routes } from '@angular/router';
import { HomePublicoComponent } from './public/home-publico/home-publico.component';
import { LoginComponent } from './public/login/login.component';
import { authGuard } from './admin/auth-guard';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProdutosAdminComponent } from './admin/produtos-admin/produtos-admin.component';
import { ProdutoAdminComponent } from './admin/produto-admin/produto-admin.component';

export const routes: Routes = [
    { path: '', component: HomePublicoComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'admin',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: HomeAdminComponent
            },
            {
                path: 'produtos',
                component: ProdutosAdminComponent
            },
            {
                path: 'produtos/novo',
                component: ProdutoAdminComponent
            },
            {
                path: 'produtos/:id',
                component: ProdutoAdminComponent
            }
        ]
    }
];
