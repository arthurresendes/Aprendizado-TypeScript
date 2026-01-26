class Pessoa {
    private nome_completo: string
    constructor(nome: string){
        this.nome_completo = nome
    }

    public ver_nome(): string{
        return this.nome_completo
    }
}

let pessoa1 = new Pessoa('Arthur')
console.log(pessoa1.ver_nome())