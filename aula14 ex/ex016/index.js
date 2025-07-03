function verificar() {
    let inputInicio = document.getElementById('Inicio')
    let inputMeio = document.getElementById('meio')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inputInicio.value.length == 0 || inputMeio.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "impossivel contar"
    } else{
        res.innerHTML = "contando..."
        // assumem os valores das variaveis acima em forma de numero e não string
    let i = Number(inputInicio.value)
    let m = Number(inputMeio.value)
    let p = Number(passo.value)
            
            // se i for menor q m faço uma contagem crescente 
    if (i < m) {
        for (c = i; c <= m ; c += p ) {
            res.innerHTML += ` \u{1f449} ${c} `
        }

        // se i for maior q m faço uma contagem regressiva
        
    }else{
        for( c = i; c >= m ; c -= p ){
            res.innerHTML += ` \u{1f449} ${c}` 
        }
        
    }

    }


}