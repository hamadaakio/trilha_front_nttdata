import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Proposta } from 'src/app/shared/models/propostas';

import { InfoClienteComponent } from '../info-cliente/info-cliente.component';
import { PropostasService } from './../../shared/propostas.service';
import { ApagarPropostaComponent } from './../apagar-proposta/apagar-proposta.component';

@Component({
  selector: 'app-historio-vazio',
  templateUrl: './historio-vazio.component.html',
  styleUrls: ['./historio-vazio.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class HistorioVazioComponent implements OnInit {
  public listaHistorico: Proposta[] = [];

  constructor(
    private propostasService: PropostasService,

    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.propostasService.mostrarDados().subscribe((response) => {
      this.listaHistorico = response;
    });
    this.listaHistorico;
  }
  displayedColumns: string[] = [
    'nome',
    'data',
    'valor',
    'parcelas',
    'view',
    'delete',
  ];
  dataSource = Proposta;

  delete(id: number) {
    this.propostasService.deletaDados(id).subscribe((response) => {
      this.listaHistorico = this.listaHistorico.filter(
        (item) => item.id !== id
      );
    });
  }
  onSubmit() {
    this.router.navigateByUrl('/propostas');
  }

  openDialog(proposta:any) {
    this.dialog.open(ApagarPropostaComponent, {
      width: '600px',
      data: {
        dados: proposta
      }
    });
  }
  openView() {
    this.dialog.open(InfoClienteComponent, {
      width: '90%',
      height: '90%',
    });
  }
}
