import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente';
import { TransfereService } from 'src/app/shared/transfere.service';

import { Validadores } from '../../shared/validadores';
import { ClientService } from './../../shared/client.service';


@Component({
  selector: 'app-proponente',
  templateUrl: './proponente.component.html',
  styleUrls: ['./proponente.component.css'],
})
export class ProponenteComponent {
  public proponenteForm: FormGroup;
  date = new Date();
  pessoa: any;

  constructor(
    private fb: FormBuilder,
    public transfereService: TransfereService,
    private router: Router,
    private clienteService: ClientService
  ) {
    this.transfereService.proponente.subscribe(
      (retorno) => (this.pessoa = retorno)
    );

    this.proponenteForm = this.fb.group({
      nomeCompleto: new FormControl(
        this.pessoa === {} ? null : this.pessoa.nomeCompleto,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Z a-zÀ-ú]*$'),
        ]
      ),
      profissao: new FormControl(
        this.pessoa === {} ? null : this.pessoa.profissao,
        [Validators.required]
      ),
      cpf: new FormControl(this.pessoa === {} ? null : this.pessoa.cpf, [
        Validators.required,
        Validators.minLength(11),
      ]),
      email: new FormControl(this.pessoa === {} ? null : this.pessoa.email, [
        Validators.required,
        Validators.email,
      ]),
      nascimento: new FormControl(
        this.pessoa === {} ? null : this.pessoa.nascimento,
        [Validators.required, Validadores.MaiorQue18Anos]
      ),
      cep: new FormControl(this.pessoa === {} ? null : this.pessoa.cep, [
        Validators.required,
        Validators.minLength(8),
      ]),
      celular: new FormControl(
        this.pessoa === {} ? null : this.pessoa.celular,
        [Validators.required, Validators.minLength(11)]
      ),
    });
  }

  enviarDados() {
    const dadosFormulario = this.proponenteForm.value;

    const cliente = new Cliente(
      dadosFormulario.nomeCompleto,
      dadosFormulario.profissao,
      dadosFormulario.cpf,
      dadosFormulario.email,
      dadosFormulario.nascimento,
      dadosFormulario.celular,
      dadosFormulario.cep
    );
    this.clienteService.SalvarDado(cliente);
    console.log(cliente);
  }

  get nomeCompleto() {
    return this.proponenteForm.get('nome');
  }
  get profissao() {
    return this.proponenteForm.get('profissao');
  }
  get cpf() {
    return this.proponenteForm.get('cpf');
  }
  get email() {
    return this.proponenteForm.get('email');
  }
  get nascimento() {
    return this.proponenteForm.get('nascimento');
  }
  get celular() {
    return this.proponenteForm.get('celular');
  }
  get cidade() {
    return this.proponenteForm.get('cidade');
  }
  get estado() {
    return this.proponenteForm.get('estado');
  }
  get cep() {
    return this.proponenteForm.get('cep');
  }

  onSubmit() {
    this.transfereService.pegarProponente(this.proponenteForm.value);
    this.router.navigateByUrl('/imovel');
  }

  @ViewChild('nomeCompletoInput')
  myInputField!: ElementRef;
  ngAfterViewInit() {
    setTimeout(() => {
      this.myInputField.nativeElement.focus();
    }, 0);
  }
}
