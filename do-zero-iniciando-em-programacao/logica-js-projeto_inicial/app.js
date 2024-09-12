alert("Boas vindas ao jogo do número secreto")
let numeroSecreto = 29
console.log(numeroSecreto)
let numeroEscolhido
let tentativas = 1

//enquanto o numeroEscolhido não for igual ao numeroSecreto
while (numeroEscolhido != numeroSecreto) {
  numeroEscolhido = prompt("Escolha um número entre 1 e 30")
  if (numeroEscolhido == numeroSecreto) {
    //alert("Isso ai você descobriu o número secreto " + numeroSecreto) -- opção implementada por mim com concatenação
    alert(
      `Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
    ) // forma sugerida pelos instrutores do curso, usando o template string ou template literal
  } else {
    if (numeroEscolhido > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroEscolhido}`)
    } else {
      alert(`O número secreto é Maior que ${numeroEscolhido}`)
    }
    //tentativas = tentativas + 1
    tentativas++ //Para atribuir mais 1: ++
  }
}
