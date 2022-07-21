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


    if (valores.length == 0) {
        alert('Digite um número antes de finalizar!')
    } else {
        res.innerHTML = ''
        res.innerHTML += `A quantidade de números digitados foi: ${total}`
    }
}