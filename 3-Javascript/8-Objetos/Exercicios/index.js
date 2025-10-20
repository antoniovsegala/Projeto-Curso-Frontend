// Exercícios de 'CRUD'
// GET - CREATE/ READ
// 1. Crie um objeto chamado 'carro' com as propriedades 'marca', 'modelo', e 'ano'.
// Acesse e imprima cada uma das propriedades no console.
console.log("exercicio 1");
carro = {
  marca: "chevrolet",
  modelo: "celta",
  ano: 2012,
};
// POST - INSERT
// 2. Adicione uma nova propriedade 'cor'
// ao objeto 'carro' e atribua a ela o valor "vermelho".
console.log("exercicio 2");
carro.cor = "vermelho";

// PUT - UPDATE
// 3. Modifique o valor da propriedade 'ano' do objeto 'carro' para o ano atual.
console.log("exercicio 3");
carro.ano = 2025;

// DELETE - DELETE
// 4. Delete a propriedade 'modelo' do objeto 'carro'
// e tente acessar essa propriedade após a exclusão.
console.log("exercicio 4");
delete carro.modelo;

// Múltiplos Métodos
// 5. Crie um objeto chamado 'pessoa' com as propriedades 'nome', 'idade', e 'cidade'.
// Modifique a 'idade' para ser 5 anos maior.
console.log("exercicio 5");
pessoa = {
  nome: "Antonio",
  idade: 21,
  cidade: "Palhoca",
};
pessoa.idade += 5;
console.log(pessoa);
// 6. Acesse e imprima o valor da propriedade 'nome' do objeto 'pessoa'
// usando a notação de colchetes.
console.log("exercicio 6");
console.log(pessoa["nome"]);

// 7. Crie um loop 'for...in' para iterar sobre todas as propriedades
// do objeto 'pessoa' e imprima chave e valor.
console.log("exercicio 7");

for (let chave in pessoa) {
  for (let chave in pessoa) {
    console.log(`A chave é ${chave}, e o valor é ${pessoa[chave]}`);
  }
}
// 8. Adicione uma nova propriedade 'profissao' ao objeto 'pessoa'
// e atribua o valor "Engenheira".
console.log("exercicio 8");
console.log("EXERCÍCIO 8");
pessoa.profissao = "Engenheira";
console.log(pessoa.profissao);
