const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "cu de prego vai visitar a amiga yohola, ajude-a com seu look"
        alternativas: [
            "Vestido"
            "Calça e blusa"
             "Saia e top"
            
        ]
    },
    {
        enunciado: "Escolha um penteado",
        alternativas: [
            "Solto"
            "Coque"
            "Trança"
        ]
    }
    {
        enunciado: "Escolha o sapato",
        alternativas: [
            "Tenis"
            "Sandália"
            "Salto"
        ]
    }
    {
        enunciado: "Escolha a make",
        alternativas: [
            "Pó de banana e gloss"
            "Riḿel, gloss e corretivo"
            "Cara lavada"
        ]
    }
    {
        enunciado: "Para onde iremos",
        alternativas: [
            "Shopping"
            "Barzinho"
            "Restaurante"
        ]
    }
]; 


