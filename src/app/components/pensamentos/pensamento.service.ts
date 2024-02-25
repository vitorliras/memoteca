import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    debugger;
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )

  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

obterQuantidadeDeDados(): Observable<number> {
  return this.listar().pipe(
    map((pensamentos: Pensamento[]) => pensamentos.length) // Especificando o tipo de dados para 'pensamentos'
  );
}

}
