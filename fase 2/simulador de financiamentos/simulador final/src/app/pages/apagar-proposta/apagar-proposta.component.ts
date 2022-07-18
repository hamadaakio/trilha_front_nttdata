import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proposta } from 'src/app/shared/models/propostas';
import { PropostasService } from 'src/app/shared/propostas.service';


@Component({
  selector: 'app-apagar-proposta',
  templateUrl: './apagar-proposta.component.html',
  styleUrls: ['./apagar-proposta.component.css'],
})
export class ApagarPropostaComponent implements OnInit {
  public listaHistorico: Proposta[] = [];

  constructor(
    public dialogRef: MatDialogRef<ApagarPropostaComponent>,
    private modalService: NgbModal,
    private propostasService: PropostasService
  ) {}

  ngOnInit(): void {}


  
  

  
}
