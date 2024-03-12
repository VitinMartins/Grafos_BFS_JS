class Grafo {
    constructor() {
        this.vertices = [];
    }

    adicionarVertice(vertice) {
        this.vertices.push(vertice);
    }

    //Itera sobre todos os vértices em this.vertices, exibindo o nome de cada vértice e uma lista de seus vizinhos no console
    mostrarGrafo() {
        for (const vertice of this.vertices) {
            console.log(`Vertice ${vertice.nome} -> Vizinhos: ${vertice.vizinhos.map(vizinho => vizinho.nome).join(' ')}`);//juntar todos os nomes dos vizinhos em unica string
                                                            //Itera sobre todos os vizinhos do vertice e retorna apenas o seu nome
        }
    }
}



module.exports = Grafo;