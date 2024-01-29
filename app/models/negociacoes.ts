import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    // private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        if (negociacao !== null) {
            this.negociacoes.push(negociacao);
        }
    }

    // public listaNegociacoes(): ReadonlyArray<Negociacao> {
    public listaNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }
}