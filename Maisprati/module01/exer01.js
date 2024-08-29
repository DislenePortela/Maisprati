
/*1 - Imprima a sequência de Fibonacci até o 10º termo

Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.*/

let num01 = 0  //inicializa a variável num01 com 0
let num02 = 1  //inicializa a variável num02 com 1
let num03 = 0  //inicializa a variável num03 com 0

let fibonatti = ""; //variável que armazenará os números na let fibonatti = " " //variável que armazenará os números na sequencia

fibonatti += num01 +``+num02; // adiciona o valor num1 e num2 na variável fibonatti
for (let i = 0; i <= 8; i ++) //loop
{
 
    num03 = num01 + num02; //soma dos números e armazena na variável num03    fibonatti += " " + num03 //soma e armazena na variável fibonatti
    num01 = num02;
    num02 = num03; //num03 ocupa a posicao do num02
    }
 console.log (fibonatti);

/*2 - Verifique se um número é primo
Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".
Dica: Um número primo só é divisível por 1 e por ele mesmo.*/

function primo(n) {

  if (n<= 1) return false; 
  if (n <= 3) return true;  
}
  
  if (n % 2 === 0 || n % 3 === 0) return false

  for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;

  }
  return true;
  
  


/*3 - Imprima um triângulo de números
Escreva um programa que use um loop for para imprimir um triângulo de números.
Dica: Utilize dois loops for, um dentro do outro.*/


/*Exercícios com 'while'
4 - Calcule o fatorial de um número
Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.
Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.*/


/*5 - Inverta os dígitos de um número
Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
Dica: Use operações de módulo e divisão para extrair os dígitos.*/


/*6 - Verifique se um número é palíndromo
Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.*/


/*Exercícios com 'do while'
7 - Conte o número de dígitos de um número
Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
Dica: Use operações de divisão para reduzir o número até que ele seja zero.*/


/*8 - Calcule a soma dos dígitos de um número
Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
Dica: Use operações de módulo para extrair os dígitos e depois some-os.*/


/*9 -Imprima um padrão de estrela decrescente
Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.
Dica: Utilize dois loops, um dentro do outro.*/


/*10 - Encontre o maior divisor comum (MDC) de dois números
Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).
Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.*/
