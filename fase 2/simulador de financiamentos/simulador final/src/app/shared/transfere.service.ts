import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/cliente';

@Injectable({
  providedIn: 'root',
})
export class TransfereService {
  private proponenteSource = new BehaviorSubject({});
  private imovelSource = new BehaviorSubject({});
  private passarParcela = new BehaviorSubject('');
  private passarValorTotal = new BehaviorSubject('');

  proponente = this.proponenteSource.asObservable();
  imovel = this.imovelSource.asObservable();
  parcelaInicial = this.passarParcela.asObservable();
  valorTotal = this.passarValorTotal.asObservable();

  constructor(private httpClient: HttpClient) {}

  pegarProponente(proponente: Object) {
    this.proponenteSource.next(proponente);
  }

  pegarImovel(imovel: Object) {
    this.imovelSource.next(imovel);
    console.log(this.imovel);
  }

  pegarParcela(parcela: string) {
    this.passarParcela.next(parcela);
  }

  pegarValorTotal(valorTotal: string) {
    this.passarValorTotal.next(valorTotal);
  }
}
