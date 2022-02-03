import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'desafio-cinco';

  nome: string = 'André Akio Hamada';
  guia: string = 'Danny Nisebaum';
  data1 = new Date('2022-01-31T19:31:00.000');
  turma: string = 'Turma 7';
}
