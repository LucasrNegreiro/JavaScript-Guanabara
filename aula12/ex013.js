let agora = new Date()
let diaSem = agora.getDay()

/* para o getDay() ele lé os dias da semana começando pelo domingo com o index 0
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/

// SWITCH geralmente e usado para situações pontuais como agora e não para saber entre um e outro para isso usamos o if else

// funciona com  numeros inteiros ou em string 'Brasil'
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERROR] Dia invalido!')
}