function verificar(){
    let ini = document.getElementById('Inicio')
    let fim = document.getElementById('meio')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERROR] Faltam Dados")
    }else{
        res.innerHTML = 'contando..'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)  
        
        if (i < f){
            for(c = i; c <= f; c += p){
                res.innerHTML += ` ${c} `
            }
        }else{
            for(c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} `
            }
        }
}
}