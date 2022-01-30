import { Component, Input } from '@angular/core';
 @Component({
 selector: 'app-componente-pai',
 template: ""
 })
 export class ComponentePaiComponent {
 @Input() numeroComponent: number = 0;
 isPar(valor: number): string {
 return valor % 2 === 0 ? "par" : "ímpar";
 }
 @Input() numeroprimoComponent: number = 0;
 isPrime(num: number): string {

  
  for (let i = 2; i < num; i++)
 
    if (num % i === 0) {
        
      return "não é primo";
    }
  return "é primo";
 
 }
}
