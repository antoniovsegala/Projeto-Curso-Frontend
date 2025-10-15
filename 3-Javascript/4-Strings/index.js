// 1. Declare uma variável chamada challenge e atribua o valor inicial 'Curso Aprenda do Zero'
const challenge = "Curso Aprenda do Zero";
// 2. Imprima a string no console do navegador usando console.log()
console.log(challenge);
// 3. Imprima o comprimento da string no console do navegador usando console.log()
console.log(challenge.length);
// 4. Altere todos os caracteres da string para letras maiúsculas usando o método toUpperCase()
let upperCaseChallenge = challenge.toUpperCase();
console.log(upperCaseChallenge);
// 5. Altere todos os caracteres da string para letras minúsculas usando o método toLowerCase()
let lowerCaseChallenge = challenge.toLowerCase();
console.log(lowerCaseChallenge);
// 6. Verifique se a string contém a palavra "Script" usando o método includes()
console.log(challenge.includes("Script"));
// 7. Altere 'Curso Aprenda do Zero' para 'Curso Aprenda do Um' usando o método replace()
let newChallenge = challenge.replace("Zero", "Um");
console.log(newChallenge);
// 8. Qual é o caractere no índice 15 na string 'Curso de aprenda do zero' ? Use o método charAt()
let specificString = "Curso de Aprenda do Zero";
console.log(specificString.charAt(15));
// 9. Qual é o código do caractere 'z' na string 'Curso de aprenda do zero' usando charCodeAt()
console.log(specificString.charCodeAt(specificString.indexOf("z")));
// 10. Use trim() para remover qualquer espaço em branco no início e no final de uma string. Ex: ' Curso Aprenda do Zero '.
let stringWithSpaces = " Curso Aprenda do Zero";
let trimmedString = stringWithSpaces.trim();
console.log(trimmedString);
