
import { PropostasService } from './../../shared/propostas.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proposta } from 'src/app/shared/models/propostas';
import { ListaHistoricoComponent } from '../lista-historico/lista-historico.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-historio-vazio',
  templateUrl: './historio-vazio.component.html',
  styleUrls: ['./historio-vazio.component.css']
})
export class HistorioVazioComponent implements OnInit {

  public listaHistorico: Proposta[] = [];
  private closeResult!: string;
  

  constructor(
    private propostasService: PropostasService,
    private modalService: NgbModal,
    private router: Router,
  ) { }

ngOnInit(): void {
  this.propostasService.mostrarDados().subscribe(response => {
    this.listaHistorico = response
  })
  this.listaHistorico
}
displayedColumns: string[] = ['nome', 'data', 'valor', 'parcelas', 'view', 'delete'];
dataSource = Proposta

delete(id: number) {
  this.propostasService.deletaDados(id).subscribe(response => {
    this.listaHistorico = this.listaHistorico.filter(item => item.id!== id);
  });
}
onSubmit() {
  this.router.navigateByUrl('/propostas');

}
openDelete(content: any, id: number) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    if (result == "OK") this.delete(id);
  });
}


// openView(item:Proposta) {
//   this.propostasService.enviaHistoric(item);

//   this.modalService.open(ListaHistoricoComponent)
// }
}