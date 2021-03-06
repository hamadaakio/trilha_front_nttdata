import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Proposta } from './models/propostas';

import { PropostasService } from './propostas.service';

describe('PropostasService', () => {
  let service: PropostasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient }, { provide: HttpHandler }],
    });
    service = TestBed.inject(PropostasService);
  });

  it('Teste enviaDados/recuperaDados', () => {
    let retorno = service.recuperaDados();

    expect(retorno.parcelas).toEqual(360);
    expect(retorno.passarValorTotal).toEqual(80000);
  });

  it('should test Envia Historico/Recupera Historico methods', () => {
    let historic: Proposta = new Proposta(
      'residencial',
      '2500',
      10000,
      20000,
      360,
      500,
      'aprovado',
      80000,
      'Andre',
      'tec',
      '22084490880',
      'tec@tec.com',
      new Date(1979, 1, 1),
      99959013003,
      9070250
    );

    service.enviaHistoric(historic);
    let retorn = service.recuperaHistoric();

    expect(retorn.imovel).toEqual('residencial');
    expect(retorn.renda).toEqual('2500');
    expect(retorn.valor).toEqual(10000);
    expect(retorn.entrada).toEqual(20000);
    expect(retorn.parcelas).toEqual(360);
    expect(retorn.passarParcela).toEqual(500);
    expect(retorn.status).toEqual('aprovado');
    expect(retorn.passarValorTotal).toEqual(80000);
    expect(retorn.nome).toEqual('Andre');
    expect(retorn.profissao).toEqual('tec');
    expect(retorn.cpf).toEqual('22084490880');
    expect(retorn.email).toEqual('tec@tec.com');
    expect(retorn.nascimento).toEqual(new Date(1979, 1, 1));
    expect(retorn.celular).toEqual(99959013003);
    expect(retorn.cep).toEqual(9070250);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
