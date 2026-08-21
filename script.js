// Jogo de Jokenpô
// Projeto acadêmico - Ciência da Computação

const opcoes = ["pedra", "papel", "tesoura"];

let pontosJogador = 0;
let pontosComputador = 0;

function jogar(escolhaJogador) {
    const escolhaComputador =
        opcoes[Math.floor(Math.random() * opcoes.length)];

    let resultado;

    if (escolhaJogador === escolhaComputador) {
        resultado = "🤝 Empate!";
    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "🎉 Você venceu!";
        pontosJogador++;
    } else {
        resultado = "🤖 O computador venceu!";
        pontosComputador++;
    }

    document.getElementById("resultado").textContent =
        `${resultado} Você: ${escolhaJogador} | Computador: ${escolhaComputador}`;

    document.getElementById("placar").textContent =
        `Jogador: ${pontosJogador} | Computador: ${pontosComputador}`;
}