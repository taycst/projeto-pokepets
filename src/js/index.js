

const listaSelecaoPokepets = document.querySelectorAll(".pokepet");

listaSelecaoPokepets.forEach(pokepet => {
   pokepet.addEventListener("click", () => {
         esconderCartaoPokepet();

         const idPokepetSelecionado = mostrarCartaoPokepetSelecionado(pokepet);

         desativarPokepetNaListagem();
         ativarPokepetSelecionadoNaListagem(idPokepetSelecionado);



   } )
})

function ativarPokepetSelecionadoNaListagem(idPokepetSelecionado) {
   const pokepetAdicionadoNaListagem = document.getElementById(idPokepetSelecionado);
   pokepetAdicionadoNaListagem.classList.add("ativo");
}

function desativarPokepetNaListagem() {
   const pokepetAtivoNaListagem = document.querySelector(".ativo");
   pokepetAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokepetSelecionado(pokepet) {
   const idPokepetSelecionado = pokepet.attributes.id.value;
   const idDoCartaoPokepetParaAbrir = "cartao-" + idPokepetSelecionado;
   const cartaoPokepetParaAbrir = document.getElementById(idDoCartaoPokepetParaAbrir);
   cartaoPokepetParaAbrir.classList.add("aberto");
   return idPokepetSelecionado;
}

function esconderCartaoPokepet() {
   const cartaoPokepetAberto = document.querySelector(".aberto");
   cartaoPokepetAberto.classList.remove("aberto");
}
