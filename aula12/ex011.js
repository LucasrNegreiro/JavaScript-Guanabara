
// esse codigo me tras algumas opções de condições usando o else if

// exemplo de voto no brasil

let idade = 

console.log(`Você tem ${idade} ANOS`)
// se for abaixo de 16 nao pode votar
if(idade < 16 ){
    console.log('Não vota!')
    
// se nao for abaixo de 16 e ter entre 16 e 17 voto é opcional e de 70 anos para cima o voto no Brasil vira opcional
}else if(idade < 18 || idade > 70){
    console.log('voto opcional')

    // agora entre 18 e 69 anos voto é obrigatorio
}else(
    console.log('voto obrigatorio!')
)