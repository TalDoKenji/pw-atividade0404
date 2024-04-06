const search = new URLSearchParams(location.search)

let nomePokemon = search.get("evolucao")

async function buscaPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    const pokemon = await response.json()
    return pokemon

}

function alteraPagina(nomePokemon) {
    document.title = "Página do " + nomePokemon
    const h1 = document.querySelector("h1")
    const h2 = document.querySelector("h2")
    h1.textContent = nomePokemon
    h2.textContent = "Informações sobre " + nomePokemon
}

async function carregaImagem(pokemon) {

    const imagemUrl = pokemon.sprites.front_default
    const imagem = new Image()
    imagem.src = imagemUrl
    return imagem

}

async function insereImagem(pokemon) {
    const imagem = await carregaImagem(pokemon)
    document.querySelector("section").appendChild(imagem)

}

async function retornaPokemon() {
    const pokemon = await buscaPokemon()
    alteraPagina(nomePokemon)
    await insereImagem(pokemon)

}

retornaPokemon()
