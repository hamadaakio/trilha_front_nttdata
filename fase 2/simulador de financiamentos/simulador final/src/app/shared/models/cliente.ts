import { Proposta } from 'src/app/shared/models/propostas';

export class Cliente{
    constructor(
        public nome:string,
        public profissao: string,
        public cpf: string,
        public email: string,
        public nascimento: Date,
        public celular: number,
        public cep: number        
    ){
        this.nome=nome;
        this.profissao=profissao;
        this.cpf=cpf;
        this.email=email;
        this.nascimento=nascimento; 
        this.celular=celular;
        this.cep=cep;
    }

    public id!:number
    public propostas!: Proposta[]
}