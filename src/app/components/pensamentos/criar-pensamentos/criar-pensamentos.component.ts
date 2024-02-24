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
id: number = 0;

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPesanmento(){
    this.service.obterQuantidadeDeDados().subscribe((qtd) =>{
      if(qtd >0){
        this.id = qtd++;
      }else{
        this.id = qtd;
      }
      this.pensamento.id = this.id;
    })
    this.service.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPesanmento(){
    this.router.navigate(['/listarPensamento'])
  }

}
