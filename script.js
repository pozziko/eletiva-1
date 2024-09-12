const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual destas comidas você acha mais dificil deixar de comer?",
        alternativas: [
            {
                texto: "Doce",
                afirmacao: "nenhum pouco saudável"
            },
            {
                texto: "Fritura",
                afirmacao: "pouco saudável"
            },
            {
                texto: "Fruta e legumes",
                afirmacao: "muito saudável"
            },
            {
                texto: "Carboidratos",
                afirmacao: "saudável"
            }            
        ]
    },
    {
        enunciado: "Em um final de semana o que você pediria para comer?",
        alternativas: [
            {
                texto: "Pizza",
                afirmacao: "nenhum pouco saudável"
            },
            {
                texto: "Salada",
                afirmacao: "muito saudável"
            },
            {
                texto: "Hamburger",
                afirmacao: "pouco saudável"
            },
            {
                texto: "Faria comida caseira",
                afirmacao: "saudável"
            }            
        ]
    },
    {
        enunciado: "Qual carne você mais gosta?",
        alternativas: [
            {
                texto: "De porco",
                afirmacao: "pouco saudável"
            },
            {
                texto: "De peixe",
                afirmacao: "muito saudável"
            },
            {
                texto: "De boi",
                afirmacao: "nenhum pouco saudável"
            },
            {
                texto: "De frango",
                afirmacao: "saudável"
            }
        ]
    },
    {
        enunciado: "Com que freuencia você faz atividades fisicas?",
        alternativas: [
            {
                texto: "Nunca",
                afirmacao: "nenhum pouco saudável"
            },
            {
                texto: "Uma ou duas vezes na semana",
                afirmacao: "pouco saudável"
            },
            {
                texto: "Tres ou quatro vezs na semana",
                afirmacao: "saudável"
            },
            {
                texto: "Cinco ou mais fezes na semana",
                afirmacao: "muito saudável"
            }
        ]
    },
    {
        enunciado: "O que você acha que falta na sua alimentação diaria?",
        alternativas: [
            {
                texto: "Mais saladas",
                afirmacao: "pouco saudável"
            },
            {
                texto: "Mais frutas",
                afirmacao: "nenhum pouco saudável"
            },
            {
                texto: "Menos carboidrstos",
                afirmacao: "saudável"
            },
            {
                texto: "Mais doces",
                afirmacao: "muito saudável"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua casa é...";
    const afimMaisEscolhida = Object.keys(contagemAfirmacoes).reduce((a, b) => contagemAfirmacoes[a] > contagemAfirmacoes[b] ? a : b);
    textoResultado.textContent = afimMaisEscolhida;
    caixaAlternativas.textContent = "";
}

