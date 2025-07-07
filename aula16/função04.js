// exemplo de fatorial
function fatorialn(n){
    let fat = 1
    // se eu passar um valor em n ele começa no valor e vai perdendo 1 ate chegar no resultado =1
    for(c = n; c > 1; c--){
        // o fatorial vai receber x c que no caso o c e o numero que eu vou colocar no parametro
        fat *= c
    }
    return fat
}
// 5! = 5 x 4 x 3 x 2 x 1 
console.log(fatorialn(6))