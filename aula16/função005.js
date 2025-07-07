// RECURSIVIDADE
// RECURÇÃO E QUANDO UMA VARIAVEL CHAMA ELA MESMA

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
/*
5! = 5 X 4 X 3 X 2 X 1

o fatorial de um numero pode ser calculado no fatorial de outro numero
5! = 5 X !4

n! = n x (n-1)!


*/