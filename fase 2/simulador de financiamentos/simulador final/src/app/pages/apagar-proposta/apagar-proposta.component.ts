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
    @Inject(MAT_DIALOG_DATA) public data: { dados:Proposta },
  
  ) {}
    
  
  openDelete() {
    // const index: any = this.data.dados.id.indexOf(this.data)

    this.propostasService.deletaDados(this.data.dados.id).subscribe();
    console.log(this.data.dados.id);
  }

  ngOnInit(): void {}

}
