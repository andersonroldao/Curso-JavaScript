// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10);

function somar(multiplo) {
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for (i = 0; i <= multiplo; i++) {
        if (i % 3 === 0) {
            multiploDe3 += i;
        } else if (i % 5 === 0) {
            multiploDe5 += i;
        }
    }
    console.log(multiploDe3 + multiploDe5);
}