
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
 
 
  constructor(
    private router : Router,
  ) {}

  onSubmit() {
      this.router.navigate(['/historico'])    
  
}}
