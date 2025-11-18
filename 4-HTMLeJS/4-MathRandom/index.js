// Math random
const num1 = Math.random();
console.log("N1", num1);

// Math floor - DECIMAL EM INTEIRO

// Math floor -> chao -> 1.9 -> 1
// Math ceil -> teto -> 1.1 -> 2
// Math round -> 1.51 -> 2 1.49 -> 1

const num2 = Math.floor(Math.random());
console.log("N2", num2);

// Math random com valores máximos

// 0 >= i < 1

// 0 - 9
const num3 = Math.floor(Math.random() * 10);
console.log("N3", num3);

// Math random com minimo

const num4 = Math.floor(Math.random() * 10) + 1;
console.log("N4", num4);

// Math random com minimo maior do que 1 -> 5 -> 10
const min = 5;
const max = 10;
const num5 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("N5", num5);
