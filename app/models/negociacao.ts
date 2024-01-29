export class Negociacao {

  constructor(
    private _data: Date,
    public readonly valor: number,
    public readonly quantidade: number
  ) { }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const date = new Date(this._data.getTime());
    return date;
  }
}
