import { MatTableDataSource } from '@angular/material/table';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Proposta } from 'src/app/shared/models/propostas';


import { PropostasService } from './../../shared/propostas.service';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.css'],
})
export class InfoClienteComponent implements OnInit {
  isShow = false;
  propostas!: any;
  public InfoCliente!: Proposta[];

  

  constructor(
    public dialogRef: MatDialogRef<InfoClienteComponent>,
    public propostasService: PropostasService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { dados: Proposta }
  ) {}

  ngOnInit(): void {
    this.propostas = [this.data.dados];
  
  }

  displayedColumns1: string[] = ['nome', 'profissao', 'cpf'];
  displayedColumns2: string[] = ['email', 'nascimento', 'cep'];
  displayedColumns3: string[] = ['celular'];
  displayedColumns4: string[] = ['imovel', 'renda', 'valor'];
  displayedColumns5: string[] = ['entrada', 'parcelas', 'vazio1'];
  displayedColumns6: string[] = ['taxa', 'passarValorTotal', 'juros'];
  displayedColumns7: string[] = ['passarParcela', 'status', 'vazio2'];
  
  // dataSource: MatTableDataSource<Proposta[]> = new MatTableDataSource<Proposta[]>([]);
  

  printPage() {
    window.print();
    this.isShow = !this.isShow;
  }
}
