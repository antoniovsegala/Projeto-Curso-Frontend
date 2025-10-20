//CRUD - CREATE READ UPDATE DELETE
//CREATE
const array = [];
const arrayDeNumeros = [1, 2, 3, 4];

//READ
//Leitura posicional - mais hardcoded
console.log(arrayDeNumeros[0]);
console.log(arrayDeNumeros[1]);
console.log("O ultimo", arrayDeNumeros[arrayDeNumeros.length - 1]);
console.log("O ultimo", arrayDeNumeros.at(-1));

// Leitura dinâmica
//inicia //ate onde vai           //oque faz no final do loop
for (let i = 0; i < arrayDeNumeros.length; i++) {
  console.log("I", arrayDeNumeros[i]);
}

//UPDATE
arrayDeNumeros[0] = 100;
for (let i = 0; i < arrayDeNumeros.length; i++) {
  console.log("I", arrayDeNumeros[i]);
}

//DELETE

arrayDeNumeros.splice(1, 1);
console.log(arrayDeNumeros);
arrayDeNumeros.pop(); //apaga o ultimo
console.log(arrayDeNumeros);
arrayDeNumeros.shift(); //apaga o primeiro
console.log(arrayDeNumeros);

//INSERT
arrayDeNumeros.push(1000);
console.log(arrayDeNumeros);

//IMPORTANTES PUSH/POP/SPLICE
