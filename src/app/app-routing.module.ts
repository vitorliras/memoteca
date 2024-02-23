import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: "listarPensamento",
      pathMatch: 'full'
    },
    {
      path: 'listarPensamento',
      component: ListarPensamentoComponent
    },
    {
        path: 'criarPensamento',
        component: CriarPensamentosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
