var idade = 70

console.log(`Sua idade é ${idade}`)
if (idade < 16) {
    console.log(`Não vota.`)
} else if (idade < 18 || idade > 69) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório!`)
}