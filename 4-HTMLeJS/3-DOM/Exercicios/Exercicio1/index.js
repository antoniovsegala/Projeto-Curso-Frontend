// 1. Mudar o Texto de um Elemento
// Crie um botão e um parágrafo. Ao clicar no botão,
// o texto do parágrafo deve ser alterado para "Texto alterado!".
// Você vai usar: getElementById, textContent

function alterarTexto() {
  //pegar o paragrafo
  const texto = document.getElementById("texto");

  //alterar o texto
  texto.textContent = "Texto alterado!";
}
