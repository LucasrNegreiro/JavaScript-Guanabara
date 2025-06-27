let agora = new Date()
let hora = agora.getHours( )
console.log(`A hora é ${hora} horas`)

// hora ente 6 e 12 é bom dia
if (hora >= 6 && hora <= 12){
    console.log('Bom dia')

    // hora entre 13 e 18 é boa tarde
}else if (hora >= 13 && hora <= 18){
    console.log('Boa tarde!')

    //  hora entre 18 e 23 é boa noite
}else if( hora > 18 && hora <= 23 ){
    console.log('Boa noite')

    // 24 entre 5 e madrugada 24 sendo (00:00)
}else {
    console.log('boa madrugada')
} 