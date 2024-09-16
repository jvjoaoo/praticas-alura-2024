//alert("Boas vindas ao jogo do número secreto")
let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número Secreto"
let paragrafo = document.querySelector(".texto__paragrafo");
paragrafo.innerHTML = "Digite um número entre 1 e 5"


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
