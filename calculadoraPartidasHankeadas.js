/**
 *  # 2️⃣ Calculadora de partidas Rankeadas
    **O Que deve ser utilizado**

    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões
    - Funções

    ## Objetivo:

    Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
    depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

    Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
    Se vitórias for entre 21 e 50 = Prata
    Se vitórias for entre 51 e 80 = Ouro
    Se vitórias for entre 81 e 90 = Diamante
    Se vitórias for entre 91 e 100= Lendário
    Se vitórias for maior ou igual a 101 = Imortal

    ## Saída

    Ao final deve se exibir uma mensagem:
    "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */

testeFunction();

function testeFunction () {
    for (let partidas = 5; partidas < 150; partidas = partidas + 10) {
        calculaPartidasHankeadas(partidas, 5);
    }
}

function calculaPartidasHankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = calculaNivel(saldoVitorias);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

function calculaNivel(saldoVitorias) {
    if (saldoVitorias >= 11 && saldoVitorias < 20) {
        return 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        return 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        return 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        return 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        return 'Lendário';
    } else if (saldoVitorias >= 101) {
        return 'Imortal';
    } else {
        return 'Ferro';
    }
}