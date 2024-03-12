function bfs(grafo, inicio, destino) {
    const fila = [inicio]; // Iniciar uma fila com o vértice de início
    const visitados = new Set(); // Conjunto para rastrear vértices visitados
    const caminho = {}; // Objeto para armazenar o caminho percorrido

    while (fila.length > 0) {
        const verticeAtual = fila.shift(); // Remove o primeiro vértice da fila 

        if (verticeAtual === destino) {
            return reconstruirCaminho(inicio, destino, caminho); // Se alcançou o destino, reconstrói e retorna o caminho mínimo
        }

        for (const vizinho of grafo.vertices.find(v => v.nome === verticeAtual).vizinhos) {
            //Para cada vizinho do vértice atual, acessando através da propriedade vizinhos do vértice atual encontrado no grafo
            if (!visitados.has(vizinho.nome)) {
                //Se o nome do vizinho não estiver presente no conjunto de vértices visitados
                fila.push(vizinho.nome);
                //Adiciona o nome do vizinho a fila de vertices a serem explorados
                visitados.add(vizinho.nome);
                //Marca o vizinho como visitado adicionando o seu nome ao conjunto de vertices visitados
                caminho[vizinho.nome] = verticeAtual;
            } // Se o vizinho não foi visitado, adiciona à fila, marca como visitado e armazena o caminho.
        }
    }

    return null; // Caso não haja caminho entre o início e o destino
}

function reconstruirCaminho(inicio, destino, caminho) {
    const resultado = [destino]; // Inicializa um array com o vértice de destino.
    let atual = destino; // Inicializa a variável para percorrer o caminho de trás para frente.

    while (atual !== inicio) {
        atual = caminho[atual]; // Move para o vértice anterior no caminho
        resultado.unshift(atual); // Adiciona o vértice atual no início do array (inverte a ordem)
    }

    return resultado; // Retorna o caminho mínimo reconstruído
}

module.exports = { bfs };