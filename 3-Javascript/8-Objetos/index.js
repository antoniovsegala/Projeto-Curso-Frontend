// let nome = "Maria";
// let idade = 17;
// let serie = "3 ano";
// let notaMatematica = 8;
// let notaPortugues = 9;
// let notaHistoria = 7;

//CRUD = Create Read Update Delete

//Create
const estudante = {
  nome: "Maria",
  idade: 17,
  serie: "3 ano",
  notas: { Matematica: 8, Portugues: 9, Historia: 7, Fisica: 10 },
};

//Read
// console.log(estudante.nome);
// const acc = "nome";
// console.log(estudante[acc]);
// console.log(estudante.notas.fisica.nota?.nota2);
// console.log(EstudanteMaternal.notas.fisica.nota?.nota2);

//Update
estudante.nome = "Julio";
//console.log(estudante);

//Delete
// delete estudante.nome;
// console.log(estudante.nome);
// estudante = {};
// console.log(estudante);

//Iteração
// for (let chave in estudante) {
//   console.log(chave + ": " + estudante[chave]);
// }

for (let chaveNotas in estudante["notas"]) {
  console.log(chaveNotas + ": " + estudante["notas"][chaveNotas]);
}
