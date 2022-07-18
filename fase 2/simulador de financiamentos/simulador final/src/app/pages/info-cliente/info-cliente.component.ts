import { Component, OnInit } from '@angular/core';
import { Proposta } from 'src/app/shared/models/propostas';

import { PropostasService } from './../../shared/propostas.service';

// const baseUrl = 'http://localhost:3000/cliente';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.css'],
})
export class InfoClienteComponent implements OnInit {
  isShow = false;
  public historico!: Proposta;

  constructor(private rs: PropostasService) {}

  ngOnInit(): void {
    this.historico = this.rs.recuperaHistoric();
  }

  printPage() {
    window.print();
    this.isShow = !this.isShow;
  }
}

//

//   clientes: Observable<Cliente[]>;

//   constructor(private dadosClienteService: DadosClienteService ) {

//     this.clientes = this.dadosClienteService.listarClientes();
//   }

//   printPage() {
//     window.print();
//     this.isShow = !this.isShow;
//   }

//   listarClientes() {
//     return this.dadosClienteService.listarClientes
//   }

//   ngOnInit(): void {
//   }

// }
