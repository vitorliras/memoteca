import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

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
    },
    {
      path: 'pensamentos/excluirPensamento/:id',
      component: ExcluirPensamentoComponent
    },
    {
      path: 'pensamentos/editarPensamento/:id',
      component: EditarPensamentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
