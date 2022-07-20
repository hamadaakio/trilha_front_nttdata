import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransfereService } from 'src/app/shared/transfere.service';

import { Proposta } from './models/propostas';

@Injectable({
  providedIn: 'root',
})
export class PropostasService {
  baseUrl = 'http://localhost:3000/cliente';

  static model: any;
  static historic: Proposta;

  constructor(private http: HttpClient) {}

  enviaDados(dados: TransfereService) {
    PropostasService.model = dados;
  }

  recuperaDados(): Proposta {
    return PropostasService.historic;
  }

  enviaHistoric(dados: Proposta) {
    PropostasService.historic = dados;
  }

  recuperaHistoric(): Proposta {
    return PropostasService.historic;
  }

  salvarDados(proposta: Proposta) {
    return this.http.post<Proposta>(this.baseUrl, proposta);
  }

  mostrarDados(): Observable<Proposta[]> {
    return this.http.get<Proposta[]>(this.baseUrl);
  }

  deletaDados(id: number) {
    var urlDel = this.baseUrl + `/${id}`;
    return this.http.delete(urlDel);
  }
}
