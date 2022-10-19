let num1
let num2

num1 = Number(prompt("Digite um número"))
num2 = Number(prompt("Digite outro número"))

operacao1 = (num1 > num2)
console.log("O primeiro número é maior que o segundo?:" , operacao1)

operacao2 = (num1 == num2)
console.log("O primeiro número é igual ao segundo?:", operacao2)

operacao3 = (num2 % num1)
operacao3 = operacao3 == 0
console.log("O segundo número é divisível pelo primeiro?:",operacao3)
