// Velocidade máximo até 70km/h
// A cada 5km/h acima do limite você ganha 1 ponto na carteira
// Se pontos na cariteira > 12 "Carteira suspendida"
// Math.Floor()

const resultado = verificaVelocidade(71);
console.log(resultado);

/* function verificaVelocidade(velocidade) {
    const pontoCarteira = Math.floor((velocidade - 70) / 5);

    if (pontoCarteira >= 12) {
        return `${(pontoCarteira)} pontos, carteira suspensa.`;
    } else if (velocidade >= 75) {
        return `Velocidade acima da permitida, ${Math.floor(pontoCarteira)} pontos na carteira`;
    } else if (velocidade > 70) {
        return 'Cuidado, velocidade acima da permitida.';
    } else {
        return 'Velocidade Permitida.';
    }
} */

// Outra forma
function verificaVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;
    const pontosCarteira = Math.floor((velocidade - velocidadeMaxima) / kmPorPontos);

    if (pontosCarteira >= 12) {
        return `${(pontosCarteira)} pontos, carteira suspensa.`;
    } else if (velocidade >= velocidadeMaxima + kmPorPontos) {
        return `Velocidade acima da permitida, ${Math.floor(pontosCarteira)} pontos na carteira`;
    } else if (velocidade > velocidadeMaxima) {
        return 'Cuidado, velocidade acima da permitida.';
    } else {
        return 'Velocidade Permitida.';
    }
}