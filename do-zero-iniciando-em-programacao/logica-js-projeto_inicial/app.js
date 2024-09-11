alert("Boas vindas ao jogo do número secreto")
let numeroSecreto = 29
console.log(numeroSecreto)

let numeroEscolhido = prompt("Escolha um número entre 1 e 30")

if (numeroEscolhido == numeroSecreto) {
  //alert("Isso ai você descobriu o número secreto " + numeroSecreto) -- opção implementada por mim com concatenação
  alert(`Isso ai você descobriu o número secreto ${numeroSecreto}`) // forma sugerida pelos instrutores do curso, usando o template string ou template literal
} else {
  console.log("Ops! Você digitou o número errado.")
}
