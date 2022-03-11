import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Cliente } from 'src/app/shared/cliente';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formCliente!: FormGroup;

  constructor(){}

  ngOnInit() {
    this.createForm(new Cliente());
  }

  public hasErrorForm = (controlName: string, errorName: string) => {
    return this.formCliente.controls[controlName].hasError(errorName);
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      email: new FormControl(cliente.email),
      message: new FormControl(cliente.message)
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);

    this.createForm(new Cliente());
  }
}

