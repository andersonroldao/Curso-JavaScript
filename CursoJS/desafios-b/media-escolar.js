// Obter média escolar a partir de um array

/*
0-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/

const array = [70, 70, 85];
console.log(mediaDoAluno(array));

function calcularMedia(notas) {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 60) {
        return "F";
    } else if (media < 70) {
        return "D";
    } else if (media < 80) {
        return "C";
    } else if (media < 90) {
        return "B";
    } else {
        return "A";
    }
}