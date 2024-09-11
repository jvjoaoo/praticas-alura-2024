//1- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/*let diaSemana = prompt("Qual o dia da semana")

const fimSemanaS = "Sabado"
const fimSemanaD = "Domingo"

if (diaSemana == fimSemanaS || diaSemana == fimSemanaD) {
  console.log("Bom fim de semana")
} else {
  console.log("Boa semana")
}
*/

//2- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
/*let numeroDigitado = prompt("Digite um valor: ")

if (numeroDigitado <= 0) {
  alert("Número negativo informado")
} else {
  alert("Número positivo")
}
*/
//3- Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
const pontuacaoGame = 100
const valorSoma = 10
let jogadorUm = 0
let inicioGame = prompt("Quanto é 5 + 5: ")

if (inicioGame == valorSoma) {
  jogadorUm = pontuacaoGame
  alert(
    `Meus parabéns, você acertou o valor da soma e recebeu ${pontuacaoGame} pontos`
  )
} else {
  alert("Ops! tente novamente")
}
