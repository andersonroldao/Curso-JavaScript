// Constructor Function

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.vizualizacoes = 0,
        this.comentarios = [],
        this.estaaovivo = false
}

const postagem = new Postagem('a', 'b', 'c');

console.log(postagem);