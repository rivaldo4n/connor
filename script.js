function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuario");
 elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log(linguagens[0])

const item = document.querySelector("#lista");
item.textContent = `${linguagens[0]}, ${linguagens[1]} e ${linguagens[2]}`;
  

let aluno1 = {
  nome: "rivaldo",
  idade: 16,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;