//console.log("Ola 1");
//console.log("Ola 2");
//console.log("Ola 3");
//console.log("Ola 4");
//console.log("Ola 5");

//for (let i = 0; i < 5; i++) {
//  console.log("Olá " + (i + 1));
//}

const cores = ["azul", "vermelho", "roxo", "preto", "branco"];
const pular = "roxo";

for (let i = 0; i < cores.length; i++) {
  if (pular === cores[i]) {
    continue;
  }

  console.log(cores[i]);
}

// cores.map((item) => {
//   console.log(item);
// });
