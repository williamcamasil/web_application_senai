import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) {

  }

  //Observable: responsável por fazer o retorno assincrono
  getVagas(): Observable<Vaga[]> {
    return this._httpClient.get<Vaga[]>(this.url);
  }

  cadastrarVaga(vaga: Vaga):Observable<Vaga[]> {
    return this._httpClient.post<Vaga[]>(this.url, vaga);
  }

  atualizarVaga(id: number, vaga: Vaga):Observable<Vaga[]> {
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Vaga[]>(urlAtualizar, vaga);
  }

  removerVaga(id: number):Observable<Vaga[]> {
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Vaga[]>(urlDeletar);
  }
}
