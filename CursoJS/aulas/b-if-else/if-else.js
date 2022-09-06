let hora = data.getFullyear()

if (hora >= 6 && hora <= 12) {
    document.write(`Bom dia!`)
} else if (hora > 12 && hora < 18) {
    document.write(`Boa Tarde!`)
} else {
    document.write(`Boa Noite!`)
}