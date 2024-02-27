import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent implements OnInit {
  // pensamento: Pensamento = {
  //   // id: 0,
  //   conteudo: '',
  //   autoria: '',
  //   modelo: '',
  // };

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      conteudo: ['',  [Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],],
      autoria: ['', [Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],],
      modelo: ['modelo1'],
    });
  }

  // ngOnInit(): void {
  //   this.formulario = new FormGroup({
  //     conteudo: new FormControl(''),
  //     autoria: new FormControl(''),
  //     modelo: new FormControl('')
  //   })
  // }

  criarPensamento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
    // this.service.obterQuantidadeDeDados().subscribe((qtd) => {
      // if (qtd > 0) {
      //   this.pensamento.id = (qtd++).toString();
      // } else {
      //   this.pensamento.id = qtd.toString();
      // }
    // });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }


  habilitarBotao(){
    if(this.formulario.valid){
        return 'botao'
    }else{
      return 'botao__desabilitado'

    }
  }
}
