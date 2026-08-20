// Jogo de Jokenpô
// Projeto acadêmico - Ciência da Computação

const opcoes = ["pedra", "papel", "tesoura"];

function jogar(escolhaJogador) {
    const escolhaComputador =
        opcoes[Math.floor(Math.random() * opcoes.length)];

    console.log("Você escolheu:", escolhaJogador);
    console.log("Computador escolheu:", escolhaComputador);

    if (escolhaJogador === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        console.log("Você venceu!");
    } else {
        console.log("O computador venceu!");
    }
}

// Exemplos de jogadas
jogar("pedra");
jogar("papel");
jogar("tesoura");