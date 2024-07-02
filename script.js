const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "cu de prego vai visitar a amiga yohola, ajude-a com seu look",
        alternativas: [
            "Vestido",
            "Calça e blusa",
            
        ]
    },
    {
        enunciado: "Escolha um penteado",
        alternativas: [
            "Solto",
            "Coque"
        ]
    },
    {
        enunciado: "Escolha o sapato",
        alternativas: [
            "Tenis",
            "Sandália"
        ]
    },
    {
        enunciado: "Escolha a make",
        alternativas: [
            "Pó de banana e gloss",
            "Riḿel, gloss e corretivo"
        ]
    },
    {
        enunciado: "Para onde iremos",
        alternativas: [
            "Shopping",
            "Barzinho"
        ]
    },
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
    }
    

mostraPergunta()
for(const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativa.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
}



