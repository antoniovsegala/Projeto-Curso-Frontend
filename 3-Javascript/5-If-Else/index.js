let idade = 18;
let carteiraMotorista = true;

// IF - se
//ELSE - se não

if (idade >= 18) {
  //vai ser executado caso seja verdadeiro
  console.log("Maior de idade");
} else {
  //vai ser executado caso seja falso
  console.log("Menor de idade");
}

if (idade >= 18 && carteiraMotorista === true) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

if (idade >= 18 || carteiraMotorista === true) {
  console.log("Pode dirigir");
}
// Classificação de nota de prova

// Escreva um programa que converta uma nota numérica
// em uma nota com letras. Use a seguinte classificação:

/*
Nota >= 90: "A"
Nota >= 80: "B"
Nota >= 70: "C"
Nota >= 60: "D"
Nota < 60: "F"
*/

let nota = 70;

if (nota >= 90) {
  console.log("nota A");
} else if (nota >= 80) {
  console.log("nota b");
} else if (nota >= 70) {
  console.log("nota c");
} else if (nota >= 60) {
  console.log("nota d");
} else {
  console.log("nota f");
}
