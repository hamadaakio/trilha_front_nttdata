import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {

  constructor( private router: Router,)
{
this.valor = this.router.getCurrentNavigation()?.extras.state?.['valorRota'];
}
  valor: any = '0'
  ngOnInit(): void {
  }

}