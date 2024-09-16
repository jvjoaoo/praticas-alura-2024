//1- Desenvolva uma aplicação que receba o nome do usuário e retorne uma mensagem de boas-vindas com o nome dele:

//2- Crie um sistema que recebe o valor da compra que o usuário gostaria de fazer:

//   2.1- Faça a formatação para moeda em 'BR';
//   2.2- Crie duas variaveis armazenando dois setores diferentes;
//   2.3- Crie a condicional:
//    Se o valor da compra for maior que determinado valor
//      usuário será direcionado para setor 1 -> exibir com console.log
//    Se não
//      usuário será direcionado para setor 2 -> exibir com console.log

const userName = prompt("Login: ")
alert(`Seja bem-vindo ${userName}, vamos praticar JavaScript!`)

let valorCompra = parseInt(prompt("Qual o valor da compra: "))
let valorFormatado = valorCompra.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
})

const setorUm = "Compras"
const setorDois = "Licitações"

if (valorCompra >= 64.0) {
  alert(
    `Desculpe ${userName}, não podemos prosseguir com o seu atendimento o valor da sua compra excede o limite. Você foi direcionado ao setor de ${setorDois} para obter a ajuda necessária`
  )
} else {
  alert(
    `Olá ${userName} o senhor fez uma compra de ${valorFormatado}, gostaria de dar continuidade no atendimento?`
  )
}

//Bugs com o código acima:
// 1° O algoritmo não identifica se o usuário e feminino ou masculino -> "Olá Ana o senhor fez..."
// 2° O algoritmo não está considerando o valor da compra como milhar

//outros bugs --> em análise
