// 3. Adicionar um Novo Item à Lista
// Crie uma lista não ordenada (ul) com alguns itens (li).
// Adicione um botão que, ao ser clicado, insira um novo item à lista.
// Você vai usar: getElementById, createElement, append, textContent

function adicionarComida() {
  //pegar a lista
  const listaComidas = document.getElementById("comidas");
  //criar um elemento
  const comidaTag = document.createElement("li");
  comidaTag.textContent = "Noz";
  //Append do elemento na lista
  listaComidas.append(comidaTag);
}
