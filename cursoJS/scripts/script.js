// const fullName = "Gusta back";
// console.log(fullName.length);

// const stringToArray = fullName.split(" ");

// console.log(stringToArray);

// console.log(fullName.toLowerCase());
// console.log(fullName.toUpperCase());
// console.log(fullName.indexOf("a"));
// console.log(fullName.slice(3, 5));

// -------------------------------------------------------------------------

//metodos de Array
const list = ["a", "b", "c", "d", "e"];

// console.log(list.length);
// list[5] = "f";
// console.log(list[2]);

// console.log(list[list.length - 1]);
// list.push("g");
// console.log(list);
// list.pop();
// console.log(list);
// list.shift();
// console.log(list);
// list.unshift("d");
// console.log(list);

// -------------------------------------------------------------------------

//objetos

// const product = {
//   nome: "camisa",
//   preco: 70,
//   estoque: true,
//   tamanho: ["P", "M", "G"],
//   cor: "azul",
// };

// console.log(product.nome);
// console.log(product["nome"]);

// const { preco, estoque } = product;
// console.log(estoque);

// const [n1, n2] = list;
// console.log(n1);
// console.log(n2);

// -------------------------------------------------------------------------

// const avatar = {
//   name: "gustavo",
//   age: 19,
// };

// const json = JSON.stringify(avatar);

// console.log(json);
// console.log(typeof json);

// const obj = JSON.parse(json);

// console.log(obj);
// console.log(typeof obj);

// -------------------------------------------------------------------------

//Estruturas condicionais
// const ex = 5;

// if (ex < 10) {
//   console.log(ex + " é menor que 10");
// }

// const nome = "GUSTAVO";

// if (nome === "gab") {
//   console.log("o nome é gab");
// } else if (nome === "nome") {
//   console.log("o nome é nome");
// } else {
//   console.log("o nome nao existe");
// }

// const num = 12;

// let testeDeNum = num == "12" ? "numero igual a 12" : "numero diferente de 12";

// console.log(testeDeNum);

// -------------------------------------------------------------------------

//estruturas de repeticao - loop

// let listNumber = [1, 2, 3, 4];
// let counter = 0;
// while (counter < listNumber.length) {
//   console.log("imprimindo lista em ordem " + listNumber[counter]);
//   counter++;
// }

// for (let index = 0; index < listNumber.length; index++) {
//   const element = listNumber[index];
//   console.log(`imprimindo lista: ${element}`);
// }

//metodos de array -> repetição

// const nomes = ["Gustavo", "Matheus", "Pedro", "Maria"];

// nomes.forEach(function (name) {
//   console.log(`O nome: ${name}`);
// });

// const modifyName = nomes.map(function (name) {
//   if (name === "Gustavo") {
//     return (name = "Gustavo Backes");
//   } else {
//     return name;
//   }
// });

// const numbers = [1, 2, 3, 4, 5, 10, 100].filter(function (number) {
//   return number >= 5;
// });
// console.log(numbers);

// const sumAll = [10, 20, 30, 40, 50].reduce(function (total, number) {
//   return total + number;
// });

// console.log(sumAll);

// funcoes

// function nomeCompleto(nome, sobrenome) {
//   return `O nome completo é ${nome} ${sobrenome}`;
// }
// const primeiroNome = "Gustavo";
// const segundoNome = "Backes";

// const meuNome = nomeCompleto(primeiroNome, segundoNome);

// console.log(meuNome);

//arrow functions

// const myArrowFunction = (a, b) => {
//   return a + b;
// };

// const soma = myArrowFunction(2, 2);

// console.log(soma);

// const sympleArrowFunction = (a, b) => a + b;

// console.log(sympleArrowFunction(20, 30));

//classes

class Produto {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productDetails() {
    return `O preço é ${this.price} e o produto é ${this.name}`;
  }
}

const socks = new Produto("meia", 12.9);
console.log(`${socks}` + `${socks.productDetails()}`);

//herança

class SuperProduto extends Produto {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }

  showAdjective(advetivo) {
    return `O $`
  }
}

const calca = new SuperProduto("jeans", 35.9, "M");
console.log(calca);
