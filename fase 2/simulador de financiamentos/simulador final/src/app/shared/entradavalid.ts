import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn } from "@angular/forms";



export const entradaValidator : ValidatorFn = (control: AbstractControl):
ValidationErrors | null =>  {
    const valorImovel = control.get('valorImovel')?.value; 
    const valorEntrada = control.get('valorEntrada')?.value;
    if(valorImovel && valorEntrada)
    {
        const parseValorImovel = parseInt(valorImovel.slice(2))
        const parseValorEntrada = parseInt(valorEntrada.slice(2))
        const porcentagem = parseValorImovel*0.2
        console.log(porcentagem);

        return parseValorEntrada < porcentagem ?
        { 'valoresIguais': true } :
        null
    }
    
    return valorImovel && valorEntrada ? { 'valoresIguais': true } :
    null

}