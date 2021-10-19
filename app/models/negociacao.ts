export class Negociacao{
    #data;
    #quantidade;
    #valor;
    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    getData(){
        return this.#data;
    }

    getQuantidade(){
        return this.#quantidade;
    }

    getValor(){
        return this.#valor;
    }

    setData(data){
        return this.#data = data;
    }

    setQuantidade(quantidade){
        return this.#quantidade = quantidade;
    }

    setValor(valor){
        return this.#valor = valor;
    }
}