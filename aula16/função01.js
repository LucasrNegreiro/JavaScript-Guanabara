// usando parametros em funções o n abaixo  e um parametro
function parimp(n){
    // se o resto da divisão de n divido por 2 for igual a 0 é par
    if(n%2 ==0){
        return 'par'
    }else{
        return 'impar'
    }
}
// parimp(10) a variavel res vai ter o resultado da chamada da função o (10) e o parametro
// entao o parametro la em cima que éra n passa a valer 10
let res = parimp(10)

console.log(res)