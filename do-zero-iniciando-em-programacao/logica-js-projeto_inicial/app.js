let numeroSecreto = gerarNumeroAleatorio()

// funções com parâmetros em JavaScript
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

exibirTextoNaTela("h1", "Jogo do número secreto")
exibirTextoNaTela("p", "Digite um número entre 1 e 5")

function verificarChute() {
  let chute = document.querySelector("input").value

  if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou')
    exibirTextoNatela('p', 'Você descobriu o número secreto!')
  } else {
    if (chute > numeroSecreto){
      exibirTextoNaTela('h1', 'Ops! número errado')
      exibirTextoNaTela('p', 'O número secreto é menor')
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior')
    }
  }
}

//Funções com retorno
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1)
}

/*let numeroMaximo = 5
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)
let numeroEscolhido
let tentativas = 1

//enquanto o numeroEscolhido não for igual ao numeroSecreto
while (numeroEscolhido != numeroSecreto) {
  numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
  if (numeroEscolhido == numeroSecreto) {
    break
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

// Operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(
  `Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
)
*/

//if (tentativas > 1) {
//  alert(
//    `Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
//  )
//} else {
//  alert(
//    `Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
//  )
//}
