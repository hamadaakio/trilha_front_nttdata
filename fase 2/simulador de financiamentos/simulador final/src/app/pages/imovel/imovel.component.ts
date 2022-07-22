import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proposta } from 'src/app/shared/models/propostas';
import { TransfereService } from 'src/app/shared/transfere.service';

import { ClientService } from './../../shared/client.service';
import { PropostasService } from './../../shared/propostas.service';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent {

  subscription!: Subscription;
  imovelDados: any;


  public mensagem!: string;
  public imovelForm: FormGroup;
  public rendaMensal!: number;
  public valorImovel!: number;
  public valorEntrada!: number;
  public quantidadeParcelas!: number;
  public erroParcela: string =
    'Valor da parcela acima dos 30% da renda mensal!';
  public aprovado!: string;
  public propostasService!: PropostasService;
  public passarParcela!: any;
  public passarValorTotal!: any;

  constructor(
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private transfereService: TransfereService,
    private router: Router,
    private clientService: ClientService,
    private PropostasService: PropostasService
  ) {
    this.transfereService.imovel.subscribe(
      (retorno) => (this.imovelDados = retorno)
    );
    this.transfereService.parcelaInicial.subscribe(
      (retorno) => (this.passarParcela = retorno)
    );
    this.transfereService.valorTotal.subscribe(
      (retorno) => (this.passarValorTotal = retorno)
    );

    this.imovelForm = this.fb.group({
      tipoImovel: new FormControl(null, [Validators.required]),
      rendaMensal: new FormControl(null, [Validators.required]),
      valorImovel: new FormControl(null, [Validators.required]),
      valorEntrada: new FormControl(null, [Validators.required]),
      parcelas: new FormControl(null, [
        Validators.required,
        Validators.max(360),
      ]),
    });
  }

  validarDados() {
    const form = this.imovelForm.value;
    const cliente = this.clientService.RecuperarDado();
    let valido: boolean = true;
   

    let proposta = new Proposta(
      form.tipoImovel,
      form.rendaMensal,
      form.valorImovel,
      form.valorEntrada,
      form.parcelas,
      this.passarParcela,
      valido ? 'Aprovado' : 'Reprovado',
      this.passarValorTotal,
      cliente.nome,
      cliente.profissao,
      cliente.cpf,
      cliente.email,
      cliente.nascimento,
      cliente.celular,
      cliente.cep,
    );

    this.PropostasService.salvarDados(proposta).subscribe((response) =>
      console.log(response, 'salvar works', this.passarParcela, this.passarValorTotal)
    );
  }

  voltar() {
    this.router.navigateByUrl('/proponente');
  }

  onSubmit() {
    let valorEntradaNum = this.imovelForm.controls['valorEntrada'].value;
    let valorImovelNum = this.imovelForm.controls['valorImovel'].value;
    let rendaMensalMin = this.imovelForm.controls['rendaMensal'].value * 0.3;
    let totalAprovado = valorImovelNum - valorEntradaNum;
    let taxaAoAno: number = 0.08;
    let parcelasNum: number = this.imovelForm.controls['parcelas'].value;
    let parcelaInicial =
      (totalAprovado * ((100 + taxaAoAno * (parcelasNum / 12)) / 100)) /
      parcelasNum;
    this.passarParcela = parcelaInicial.toString();
    this.passarValorTotal = totalAprovado.toString();
    this.transfereService.pegarParcela(this.passarParcela);
    this.transfereService.pegarValorTotal(this.passarValorTotal);

    if (valorEntradaNum < valorImovelNum * 0.2)
      this._snackBar.open(
        'O valor da entrada precisa ser maior que 20% do valor do imóvel',
        'OK',
        {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      );
    else if (totalAprovado < 0)
      this._snackBar.open(
        'O valor da entrada deve ser menor que o valor do imóvel',
        'OK',
        {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      );
    else if (rendaMensalMin > parcelaInicial)
      this.router.navigateByUrl('/aprovado');
    else this.router.navigateByUrl('/reprovado');
  }

  get imovel() {
    return this.imovelForm.get('tipoImovel');
  }

  get renda() {
    return this.imovelForm.get('rendaMensal');
  }

  get valor() {
    return this.imovelForm.get('valorImovel');
  }

  get entrada() {
    return this.imovelForm.get('valorEntrada');
  }

  get parcelas() {
    return this.imovelForm.get('parcelas');
  }
  

  @ViewChild('tipoImovelInput')
  myInputField!: ElementRef;
  ngAfterViewInit() {
    setTimeout(() => {
      this.myInputField.nativeElement.focus();
    }, 0);
  }
}
