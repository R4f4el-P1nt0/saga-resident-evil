// Seleciona todos os botões de personagem
const icones = document.querySelectorAll(".icone");
// Seleciona todos os personagens
const cartoes = document.querySelectorAll(".cartao");

// Adiciona o evento de clique em cada botão
icones.forEach((icone, indice) => {
    icone.addEventListener("click", () => {
        removerSelecaoIcone();
        selecionarIcone(icone);

        removerSelecaoCartao();
        selecionarCartao(indice);
    });
});

/**
 * Remove a classe "selecionado" do ícone que está atualmente selecionado
 */
function removerSelecaoIcone() {
    const iconeAtivo = document.querySelector(".icone.ativo");
    if (iconeAtivo) {
        iconeAtivo.classList.remove("ativo");
    }
}

/**
 * Adiciona a classe "selecionado" ao ícone clicado
 * @param {Element} icone - Ícone que foi clicado
 */
function selecionarIcone(icone) {
    icone.classList.add("ativo");
}

/**
 * Remove a classe "selecionado" do cartão atualmente exibido
 */
function removerSelecaoCartao() {
    const cartaoSelecionado = document.querySelector(".cartao.selecionado");
    if (cartaoSelecionado) {
        cartaoSelecionado.classList.remove("selecionado");
    }
}

/**
 * Adiciona a classe "selecionado" ao cartao correspondente ao botão clicado
 * @param {number} indice - Índice do ícone clicado, que corresponde ao personagem
 */
function selecionarCartao(indice) {
    cartoes[indice].classList.add("selecionado");
}