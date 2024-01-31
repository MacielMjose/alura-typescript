export class Negociacao {
  constructor(
    private _data: Date,
    public readonly valor: number,
    public readonly quantidade: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const date = new Date(this._data.getTime());
    return date;
  }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const qauntidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, qauntidade, valor);
  }
}
