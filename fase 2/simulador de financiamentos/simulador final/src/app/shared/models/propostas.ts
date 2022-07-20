export class Proposta {
  constructor(
    public imovel: string,
    public renda: string,
    public valor: number,
    public entrada: number,
    public parcelas: number,
    public passarParcela: number,
    public status: string,
    public passarValorTotal: number,
    public nome: string,
    public profissao: string,
    public cpf: string,
    public email: string,
    public nascimento: Date,
    public celular: number,
    public cep: number,
  ) {
    this.imovel = imovel;
    this.renda = renda;
    this.valor = valor;
    this.entrada = entrada;
    this.parcelas = parcelas;
    this.passarParcela;
    this.status = status;
    this.passarValorTotal;
    this.nome = nome;
    this.profissao = profissao;
    this.cpf = cpf;
    this.email = email;
    this.nascimento = nascimento;
    this.celular = celular;
    this.cep = cep;

  }

  public id!: number;
  public data: Date = new Date();
  public taxa!: '10%'
}
