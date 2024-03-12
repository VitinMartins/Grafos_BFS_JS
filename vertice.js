class Vertice {
    constructor(nome) {
        this.nome = nome;
        this.vizinhos = [];
    }

    adicionarVizinho(vizinho) {
        this.vizinhos.push(vizinho);
        vizinho.vizinhos.push(this); // Para garantir que seja não direcionado
    }
}

module.exports = Vertice;