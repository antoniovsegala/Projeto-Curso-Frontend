// 0 - Crie um array de cores com 4 cores,
// e um array de frutas com os valores ["Banana", "Pera"]
const cores = ["azul", "vermelho", "roxo", "branco"];
const frutas = ["Banana", "Pera"];

// 1. Acesse o segundo e o último elemento do array 'cores'.
console.log("Exercicio 1");
console.log(cores[1]);
console.log(cores[3]);
console.log("------------------");
// 2. Adicione "Uva" no final do array 'frutas'.
console.log("Exercicio 2");
frutas.push("Uva");
console.log(frutas);
console.log("------------------");
// 3. Adicione "Manga" no início do array 'frutas'.
console.log("Exercicio 3");
frutas.unshift("Manga");
console.log(frutas);
console.log("------------------");
// 4. Adicione "Morango" na posição 2 do array 'frutas'.
console.log("Exercicio 4");
frutas.splice(2, 0, "Morango");
console.log(frutas);
console.log("------------------");
// 5. Atualize o terceiro elemento do array 'frutas' para "Laranja".
console.log("Exercicio 5");
frutas[2] = "Laranja";
console.log(frutas);
console.log("------------------");
// 6. Remova o último elemento do array 'frutas'.
console.log("Exercicio 6");
frutas.pop();
console.log(frutas);
console.log("------------------");
// 7. Remova o primeiro elemento do array 'frutas'.
console.log("Exercicio 7");
frutas.shift();
console.log(frutas);
console.log("------------------");
// 8. Remova o segundo elemento do array 'frutas'. (Desafio) Pode procurar no google
console.log("Exercicio 8");
frutas.splice(1, 1);
console.log(frutas);
console.log("------------------");
// 9. Use um loop 'for' tradicional para imprimir todos os elementos do array 'frutas'.
console.log("Exercicio 9");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
console.log("------------------");
// 10. Use 'map' para criar um novo array com todas as frutas em maiúsculas.
console.log("Exercicio 10");

const frutasMaiusculas = frutas.map((fruta) => fruta.toUpperCase());

console.log(frutasMaiusculas);
console.log("------------------");
