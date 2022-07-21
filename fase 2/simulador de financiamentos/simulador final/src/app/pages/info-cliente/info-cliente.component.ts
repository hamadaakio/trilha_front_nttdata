import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proposta } from 'src/app/shared/models/propostas';

import { PropostasService } from './../../shared/propostas.service';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.css'],
})
export class InfoClienteComponent implements OnInit {
  isShow = false;
  public listaHistorico: Proposta[] = [];

  constructor(
    public propostasService: PropostasService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.propostasService.mostrarDados().subscribe((response) => {
      this.listaHistorico = response;
    });
    this.listaHistorico;
    console.log(Proposta)
  }
  displayedColumns1: string[] = ['nome', 'profissao', 'cpf'];
  displayedColumns2: string[] = ['email', 'nascimento', 'cep'];
  displayedColumns3: string[] = ['celular'];
  displayedColumns4: string[] = ['imovel', 'renda', 'valor'];
  displayedColumns5: string[] = ['entrada', 'parcelas', 'vazio1'];
  displayedColumns6: string[] = ['taxa', 'passarValorTotal', 'juros'];
  displayedColumns7: string[] = ['passarParcela', 'status', 'vazio2'];

  dataSource = Proposta;

  printPage() {
    window.print();
    this.isShow = !this.isShow;
  }
}
