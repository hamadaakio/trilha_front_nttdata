import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proposta } from 'src/app/shared/models/propostas';
import { PropostasService } from 'src/app/shared/propostas.service';

@Component({
  selector: 'app-apagar-proposta',
  templateUrl: './apagar-proposta.component.html',
  styleUrls: ['./apagar-proposta.component.css'],
})
export class ApagarPropostaComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<ApagarPropostaComponent>,
    public propostasService: PropostasService,
    public proposta: Proposta,
    @Inject(MAT_DIALOG_DATA) public data: { dados:Proposta}
  ) {}

  // delete(id: number) {
  //   this.propostasService.deletaDados(id).subscribe((response) => {
  //     this.listaHistorico = this.listaHistorico.filter(
  //       (item) => item.id !== id
  //     );
  //   });
  // }
  openDelete(_id: number) {
    this.propostasService.deletaDados(this.proposta.id).subscribe();
    console.log(this.proposta.id);
  }

  ngOnInit(): void {}

  // openDelete(id: number) {
  //   this.modalService
  //     .open({ ariaLabelledBy: 'modal-basic-title' })
  //     .result.then((result) => {
  //       if (result == 'OK') this.delete(id);
  //     });
  // }
}
