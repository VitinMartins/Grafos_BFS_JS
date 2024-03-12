const Vertice = require('./vertice');
const Grafo = require('./grafo');
const { bfs } = require('./bfs');

const grafo = new Grafo();

const VA = new Vertice("A");
const VB = new Vertice("B");
const VC = new Vertice("C");
const VD = new Vertice("D");
const VE = new Vertice("E");
const VF = new Vertice("F");
const VG = new Vertice("G");
const VH = new Vertice("H");
const VI = new Vertice("I");


grafo.adicionarVertice(VA);
grafo.adicionarVertice(VB);
grafo.adicionarVertice(VC);
grafo.adicionarVertice(VD);
grafo.adicionarVertice(VE);
grafo.adicionarVertice(VF);
grafo.adicionarVertice(VG);
grafo.adicionarVertice(VH);
grafo.adicionarVertice(VI);

VA.adicionarVizinho(VB);
VA.adicionarVizinho(VD);

VB.adicionarVizinho(VC);
VB.adicionarVizinho(VE);

VC.adicionarVizinho(VF);

VD.adicionarVizinho(VE);
VD.adicionarVizinho(VG);

VE.adicionarVizinho(VF);
VE.adicionarVizinho(VH);

VF.adicionarVizinho(VI);

VG.adicionarVizinho(VH);

VH.adicionarVizinho(VI);





grafo.mostrarGrafo();

const caminhoMinimo = bfs(grafo, VA.nome, VI.nome);

console.log(`Menor caminho é: ${caminhoMinimo.join('-> ')}`);