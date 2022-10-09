// Tipo primitivo
const mensagem = "    Minha primeira mensagem";
console.log(typeof mensagem);

// Tipo objeto
const mensagem1 = new String('Bom dia!')
console.log(typeof mensagem1);
console.log(mensagem1.length,
    mensagem1[0],
    mensagem.includes('primeira'),
    mensagem.includes('vermelho'),
    mensagem.startsWith('verde'),
    mensagem.endsWith(mensagem),
    mensagem.indexOf('primeira'));

console.log(`${mensagem}
${mensagem.replace('Minha', 'Sua')}
${mensagem.trim()}
${mensagem1.split(' ')}`);