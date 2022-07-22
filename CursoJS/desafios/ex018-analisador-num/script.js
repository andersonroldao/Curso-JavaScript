let num = document.getElementById('num')
let lista = document.getElementById('select')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(params) {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let item = document.createElement('option')

        select.appendChild(item)
        valores.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado.`
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou duplicado, tente novamente.\n\nDica: Tente um valor entre 1 e 100.')
    }
    num.value = ''
    num.focus()
}

function finalizar(params) {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    if (valores.length == 0) {
        alert('Digite um número antes de finalizar!')
    } else {
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            else if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
            media = soma / total
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Soma dos valores adionados: ${soma}.</p>`
        res.innerHTML += `<p>Média dos valores adicionados: ${media.toFixed(2)}.</p>`
        res.innerHTML += `<p>Quantidade de números adicionados: ${total}.</p>`
        res.innerHTML += `<p>Maior valor informado: ${maior}.</p>`
        res.innerHTML += `<p>Menor valor informado: ${menor}.</p>`

    }
}