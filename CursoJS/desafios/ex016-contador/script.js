function contar() {
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `<p>Dica: Preencha os campos obrigatórios!</p>`

    } else if (passo.value <= -1) {
        resultado.innerHTML = `<p>Contando:</p>`
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        if (i < f) {
            // Contagem Decrescente
            for (let c = f; c >= i; c += p) {
                resultado.innerHTML += ` \u{1F449} ${c} `
            }
        } else {
            // Contagem Crescente
            for (let c = f; c <= i; c -= p) {
                resultado.innerHTML += ` \u{1F449} ${c} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`

    } else {
        resultado.innerHTML = `<p>Contando:</p>`
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        if (p == 0) {
            resultado.innerHTML = `Dica: PASSO = 0! Considerando PASSO = 1!`
            p = 1
        }

        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` \u{1F449} ${c} `
            }

        } else {
            // Contagem Decrescente
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` \u{1F449} ${c} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}