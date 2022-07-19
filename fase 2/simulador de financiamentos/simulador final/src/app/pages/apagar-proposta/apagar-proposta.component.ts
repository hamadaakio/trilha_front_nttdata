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

  delete(id: number) {
    this.propostasService.deletaDados(id).subscribe(response => {
      this.listaHistorico = this.listaHistorico.filter(item => item.id!== id);
    });
  }

  ngOnInit(): void {}

  openDelete( id: number) {
      this.modalService.open( { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        if (result == "OK") this.delete(id);
      });
    }


  
  

  
}
