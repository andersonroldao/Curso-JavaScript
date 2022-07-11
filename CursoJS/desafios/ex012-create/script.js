function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var relogio = data.toLocaleTimeString()

    msg.innerHTML = `Agora são ${relogio}.`

    if (hora >= 6 && hora < 12) {
        img.src = 'image/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'image/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'image/fotonoite.png'
        document.body.style.background = '#515154'
    }

    setInterval(carregar, 1)

}