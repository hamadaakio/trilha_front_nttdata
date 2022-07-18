import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proposta } from 'src/app/shared/models/propostas';

import { PropostasService } from './../../shared/propostas.service';
import { InfoClienteComponent } from './../info-cliente/info-cliente.component';

@Component({
  selector: 'app-lista-historico',
  templateUrl: './lista-historico.component.html',
  styleUrls: ['./lista-historico.component.css'],
})
export class ListaHistoricoComponent implements OnInit {
  public listaHistorico!: Proposta[];
  private closeResult!: string;

  constructor(private propostasService: PropostasService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.propostasService.mostrarDados().subscribe((response) => {
      this.listaHistorico = response;
    });
    this.listaHistorico;
  }

  delete(id: number) {
    this.propostasService.deletaDados(id).subscribe((response) => {
      this.listaHistorico = this.listaHistorico.filter(
        (item) => item.id !== id
      );
    });
  }

  openDelete(content: any, id: number) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (result == 'OK') this.delete(id);
      });
  }

  openView(item: Proposta) {
    this.propostasService.enviaHistoric(item);

    this.modalService.open(InfoClienteComponent);
  }
}
//   clientes: Observable<Cliente[]>;

//   displayedColumns = [
//     'nomeCompleto',
//     'data',
//     'valorImovel',
//     'parcelas',
//     'view',
//     'delete',
//   ];

//   constructor(
//     private dadosClienteService: DadosClienteService,
//     public dialog: MatDialog
//   ) {
//     this.clientes = this.dadosClienteService.listarClientes();
//   }
//   openPopup() {
//     this.dialog.open(ExluirPropostaComponent,{
//       width: '500px',

//     });
//   }

//   openDialog(

//   ): void {
//     this.dialog.open(InfoClienteComponent, {
//       width: '100%',
//       height: '90%',
//     });
//   }

//   ngOnInit(): void {}

//   // listarClientes() {
//   //   this.transfereService.listarClientes().subscribe({});
//   // }
// }

// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {};
// }
