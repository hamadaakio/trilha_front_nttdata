import { Injectable } from '@angular/core';

import { Cliente } from './models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  static model: Cliente;

  constructor() {}

  SalvarDado(model: Cliente) {
    ClientService.model = model;
  }

  RecuperarDado(): Cliente {
    return ClientService.model;
  }
}
