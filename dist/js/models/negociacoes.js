export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        if (negociacao !== null) {
            this.negociacoes.push(negociacao);
        }
    }
    // public listaNegociacoes(): ReadonlyArray<Negociacao> {
    listaNegociacoes() {
        return this.negociacoes;
    }
}
