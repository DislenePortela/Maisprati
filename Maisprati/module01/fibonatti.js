
let num01 = 0 //inicializa a variável num01 com 0
let num02 = 1 //inicializa a variável num02 com 1
let num03 = 0 //inicializa a variável num03 com 0

let fibonatti = num03


for (i = 0; i <= 8; i ++) //inicia um loop
{
 

    num01 = num02 //num02 ocupa a posiçao do num01
    num02 = num03 //num03 ocupa a posiçao do num02

    num03 = num01 + num02 // variável num03 recebe o valor de num01 + num02
    fibonatti += " " + num03 //adiciona o resultado da soma na variável fibonatti com um espaço entre eles
 

    }
 console.log (fibonatti) //Apresentaçao da sequencia
