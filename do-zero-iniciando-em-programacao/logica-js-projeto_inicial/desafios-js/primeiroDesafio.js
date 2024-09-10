/* Desafios */

/* 01 */
/*alert("Boas vindas ao nosso site!")*/

/* do 02 ao 05 */
/*const nome = "Lua"
const idade = 25

let numeroDeVendas = 50
let saldoDisponivel = 1000

console.log(nome)
console.log(idade)
console.log(numeroDeVendas)
console.log(saldoDisponivel)
*/

/* do 06 ao 10 */

/*let mensagemDeErro = "Erro! Preencha todos os campos"
alert(mensagemDeErro)*/

const nome = prompt("Qual o seu nome?")
let idade = prompt("informe sua idade")

let idadeEstimada = 18

if (idade >= 18) {
  console.log("Parabéns " + nome + " Você já pode tirar sua habilitação")
} else {
  console.log(
    "Desculpe " +
      nome +
      " Você ainda não tem maior idade, tente daqui alguns anos"
  )
}
