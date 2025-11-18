// 1. Gere um número aleatório entre 0 e 1 - OK
const exerc1 = Math.random();
console.log("EXERC 1", exerc1);

// 2. Gere um número aleatório entre 0 e 10
const exerc2 = Math.random() * 10;
console.log("EXERC 2", exerc2);

// 3. Arredonde um número aleatório para o inteiro mais próximo
const exerc3 = Math.round(Math.random());
console.log("EXERC 3", exerc3);

// 4. Gere um número inteiro entre 1 e 10
const exerc4 = Math.floor(Math.random() * 10 + 1);
console.log("EXERC 4", exerc4);

// 5. Simule um dado de 6 lados (de 1 a 6)
const exerc5 = Math.floor(Math.random() * 6 + 1);
console.log("EXERC 5", exerc5);

// 6. Sorteie um item de uma lista de frutas
const frutas = ["pera", "maca", "banana", "abacaxi", "uva", "laranja", "limao"];

const exerc6 = Math.floor(Math.random() * (frutas.length - 1));
console.log("EXERC 6", frutas[exerc6]);

// 7. Simule cara ou coroa. cara -> 1 coroa -> 0
const exerc7 = Math.floor(Math.random() * 2);

const moeda = exerc7 === 1 ? "cara" : "coroa";

console.log("EXERC 7", moeda);

// 8. Gere um número inteiro entre 5 e 10
const min = 5;
const max = 10;

const exerc8 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("EXERC 8", exerc8);
