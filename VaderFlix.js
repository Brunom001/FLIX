function adicionarFilme() {

    const filmeFavorito = document.querySelector('#filme').value

    if (filmeFavorito.endsWith('.jpg')) {

        listarFilmesNaTela(filmeFavorito)
    } else {

        alert("Imagem Inválida")
    }
}

function listarFilmesNaTela(filme) {

    const listaFilmes = document.querySelector('#listaFilmes')
    const elementoFilme = `<img src=${filme} >`
    listaFilmes.innerHTML += elementoFilme
    limparCampo()
}

function limparCampo() {

    const filmeFavorito = document.querySelector('#filme')
    filmeFavorito.value = ""
}