//1. Soma de Elementos de um Array

let sum = 0      // variável soma
let arr = [10,20,30,40] // criaçao das posiçoes do array

console.log (arr.length)  //mostrar o tamanho do array

for (let i = 0; i < arr.length; i++) //array inicia com zero, enquanto ele for menor que a posiçao dele ele soma
    {
        sum += arr[i] // soma o valor das posiçoes que estao armazenadas
}
console.log (sum) // No console é apresentados a soma dos valores contidos no array