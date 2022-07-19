function calcular() {
    let num = document.getElementById('number')
    let tabuada = document.getElementById('select')

    if (num.value.length == 0) {
        window.alert('Dica: Digite um número!')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            tabuada.appendChild(item)
            item.text = `${n} X ${c} = ${n * c}`
        }

        /* or
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            tabuada.appendChild(item)
            item.text = `${n} X ${c} = ${n * c}`
            c++
        } */
    }
}