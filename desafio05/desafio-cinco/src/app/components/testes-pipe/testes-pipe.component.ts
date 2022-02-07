import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.css']
})
export class TestesPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  evento: any = {
    data: new Date(2021, 9, 26 ),
    preco: 35.00,
    ingressos: 84.65/100,
  }

  

}