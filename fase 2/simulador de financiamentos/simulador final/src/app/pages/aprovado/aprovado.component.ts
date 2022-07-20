import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransfereService } from 'src/app/shared/transfere.service';


@Component({
  selector: 'app-aprovado',
  templateUrl: './aprovado.component.html',
  styleUrls: ['./aprovado.component.css'],
})
export class AprovadoComponent implements OnInit {
  subscription!: Subscription;
  parcelaInicial!: string;
  valorTotal!: string;

  constructor(private transfereService: TransfereService) {
    this.transfereService.parcelaInicial.subscribe(
      (retorno) => (this.parcelaInicial = retorno)
    );
    this.transfereService.valorTotal.subscribe(
      (retorno) => (this.valorTotal = retorno)
    );
  }

  ngOnInit() {
    console.log(this.parcelaInicial);
  }
}
