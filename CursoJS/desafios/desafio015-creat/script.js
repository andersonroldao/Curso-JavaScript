function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formano.value.length == 0 || formano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 2) {
                // Bebê
                img.setAttribute('src', 'image/h-bebe250.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'image/h-criança250.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'image/h-adolescente250.png')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'image/h-adulto250.png')
            } else if (idade < 130){
                // Idoso
                img.setAttribute('src', 'image/h-idoso250.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 2) {
                // Bebê
                img.setAttribute('src', 'image/m-bebe250.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'image/m-criança250.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'image/m-adolescente250.png')
            } else if (idade < 65) {
                // Adulta
                img.setAttribute('src', 'image/m-adulta250.png')
            } else {
                // Idosa
                img.setAttribute('src', 'image/m-idosa250.png')
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)

    }

}