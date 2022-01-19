import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "";

  constructor(private _httpClient: HttpClient) {

  }

  //Observable: responsável por fazer o retorno assincrono
  getVagas(): Observable<Vaga[]> {
    return this._httpClient.get<Vaga[]>(this.url);
  }
}
