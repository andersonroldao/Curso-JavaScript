let select = document.querySelector('select#select')
let res = document.querySelector('div#res')
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

function adicionar() {
    let num = document.querySelector('input#num')

    if (isNumero(num.value) && !inLista(num.value, valores)) {
    } else {
        window.alert('Digite um número entre 1 e 100')
    }
}