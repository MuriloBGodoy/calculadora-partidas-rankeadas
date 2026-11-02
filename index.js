/**
 * Desafio Calculadora de Partidas Rankeadas
 * Formação Lógica de Programação - Digital Innovation One (DIO)
 *
 * Utiliza:
 * - Variáveis
 * - Operadores aritméticos, lógicos e relacionais
 * - Laços de repetição (for...of)
 * - Estruturas de decisões (if / else if / else)
 * - Funções com parâmetros e retorno
 */

function calcularNivel(vitorias) {
    let nivel = "";

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

function calcularPartidasRankeadas(vitorias, derrotas) {
    // Cálculo do saldo de rankeadas (vitórias - derrotas)
    const saldoVitorias = vitorias - derrotas;
    const nivel = calcularNivel(vitorias);

    const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
    console.log(mensagem);

    return {
        saldoVitorias,
        nivel,
        mensagem
    };
}

// Demonstração iterando uma lista de jogadores com laço de repetição
function executarDemonstracao() {
    console.log("=== CALCULADORA DE PARTIDAS RANKEADAS ===\n");

    const jogadores = [
        { nome: "Jogador 1", vitorias: 8, derrotas: 2 },
        { nome: "Jogador 2", vitorias: 15, derrotas: 5 },
        { nome: "Jogador 3", vitorias: 35, derrotas: 10 },
        { nome: "Jogador 4", vitorias: 68, derrotas: 20 },
        { nome: "Jogador 5", vitorias: 85, derrotas: 15 },
        { nome: "Jogador 6", vitorias: 98, derrotas: 22 },
        { nome: "Jogador 7", vitorias: 120, derrotas: 30 }
    ];

    // Laço de repetição
    for (const jogador of jogadores) {
        calcularPartidasRankeadas(jogador.vitorias, jogador.derrotas);
    }

    console.log("\n=========================================");
}

if (require.main === module) {
    executarDemonstracao();
}

module.exports = {
    calcularNivel,
    calcularPartidasRankeadas,
    executarDemonstracao
};
