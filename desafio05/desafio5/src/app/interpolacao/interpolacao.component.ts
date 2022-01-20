import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {
  nome: string = 'André Akio Hamada';
  guia: string = 'Danny Nisenbaum';
  data = Date;
  turma = 'turma *';
  
  constructor() {}
   

  ngOnInit(): void {
  }

}
