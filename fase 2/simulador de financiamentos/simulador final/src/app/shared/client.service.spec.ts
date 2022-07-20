import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { Cliente } from './models/cliente';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientService);
  });

  it('Teste  SalvarDado/ RecuperarDado', () => {
    let model: Cliente = new Cliente(
      'nome',
      'profissao',
      'cpf',
      'email',
      new Date(2000, 1, 1),
      99,
      99
    );

    service.SalvarDado(model);
    let retorno = service.RecuperarDado();

    expect(retorno.nome).toEqual('nome');
    expect(retorno.profissao).toEqual('profissao');
    expect(retorno.cpf).toEqual('cpf');
    expect(retorno.email).toEqual('email');
    expect(retorno.nascimento).toEqual(new Date(2000, 1, 1));
    expect(retorno.celular).toEqual(99);
    expect(retorno.cep).toEqual(99);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
