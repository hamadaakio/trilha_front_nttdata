import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactService } from './form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  formCliente: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ContactService
    ){}

  ngOnInit() {
    this.createForm();
  }

  public hasErrorForm = (controlName: string, errorName: string) => {
    return this.formCliente.controls[controlName].hasError(errorName);
  }

  createForm() {
    this.formCliente = this.formBuilder.group({
      email: ["", [Validators.required]],
      message: ["",[Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formCliente.value);
    if(this.formCliente.valid){
      console.log('submit');
      this.service.create(this.formCliente.value).subscribe({
          next:(response:any) => {
            console.log(response);
            alert("Sucesso ao salvar");
            this.formCliente.reset();
          },
          error:(error:any) => {
            console.log(error);
            alert("Erro");
          }

      });
    }
  }
}
