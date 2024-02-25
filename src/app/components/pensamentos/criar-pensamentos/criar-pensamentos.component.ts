import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

pensamento: Pensamento = {
  // id: 0,
  conteudo:'',
  autoria:'',
  modelo:''
}

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    debugger;
    this.service.obterQuantidadeDeDados().subscribe((qtd) =>{
    debugger;

      if(qtd >0){
        this.pensamento.id= (qtd++).toString();
      }else{
        this.pensamento.id= qtd.toString();
      }
      this.service.criar(this.pensamento).subscribe(() =>{
        this.router.navigate(['/listarPensamento'])
      })
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
