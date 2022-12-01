function usuario() {
    this.nome = 'Anderson';
    this.idade = 27;
    this.soma = function (a, b) {
        return a + b;
    }
}

// Operador New
const user = new usuario();
console.log(user, user.nome, user.idade, user.soma(95, 7));