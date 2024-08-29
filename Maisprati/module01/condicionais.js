
// Estrutura de controle: Condicionais - Aula 06

console.log (10 > 5)        // true - dez maior que cinco
console.log (10 < 5)        // false - dez menor que cinco
console.log (10 <= 5)       // false - dez menor ou igual a cinco
console.log (10 >= 5)       // true - dez maior ou igual a cinco
console.log (10 == 5)       // false - dez igual a cinco
console.log (10 == '10')    // true - 10 tipo número é igual a "10"string 
                            // Porque para  o javascript número e string em numeral ele considera verdadeiro.
console.log (10 == '10')    // "false - 10(number) semelhante a '10'(string). Aqui ele já considera falso, porque os 
                            //3 sinais de igual para o Javascript significa
                            // semelhante, entao 10 number é diferente de "10"
                            // string.É assim que ele distingue number de string"
console.log (10 != '10')    // false - 10(number) diferente de '10'(string) Pela mesma lógica anterior. Reconhece a string como número.                                              
console.log (10 !== '10')  // true - 10(number) nao é semelhante a '10'(string)10