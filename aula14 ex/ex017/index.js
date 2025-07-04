
function tabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')

    // se o valor de numero estiver em branco me traga o alerta
    if(num.value.length == 0 ){
        alert('Por favor digite um numero')
        
        // se não me traga o codigo abaixo
    }else{
        let n = Number(num.value)
        
        // antes de começar a tabuada limpa a outra

        tab.innerHTML =''
        // laço de repetição para taboada c e igual a 1 e vai ate 10 depois para

    for(c =1; c <= 10; c++){
        // criei o elemento option e dentro do option tem o seguinte texto
        let item = document.createElement('option')
        // n x c = n*c exemplo: 8x1 = 8 ai o c que é o for vai e roda novamente trazendo 8x2 isso ate chegar no 10 e parar
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`

        tab.appendChild(item)
    }
    }
}
      