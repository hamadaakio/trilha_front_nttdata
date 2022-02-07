import { ComponentePaiComponent } from
'./../componente-pai/componente-pai.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-componente-filho',
templateUrl: './componente-filho.component.html',
styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent extends
ComponentePaiComponent {

    constructor ( private router:Router) {
        super();
    }
    cubo() {
        this.router.navigate(['/cubo'], { queryParams: {valorCubo: [this.numeroComponent]} });
      }
    
}
