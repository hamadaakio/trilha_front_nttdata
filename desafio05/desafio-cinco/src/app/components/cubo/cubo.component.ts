import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {

  public valorCubo: number = 0

  constructor( private router:Router ) { 

    this.valorCubo = this.router.getCurrentNavigation()?.extras.queryParams?.['valorCubo'] 
   }

  ngOnInit(): void {
  }

}