function verificar(){
    let ini = document.getElementById('Inicio')
    let meio = document.getElementById('meio')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || meio.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'

    }else{
        res.innerHTML = 'contando...'

        let i = Number(ini.value)
        let m = Number(meio.value)
        let p = Number (passo.value)

        if(i < m){
            for(c = i; c <= m; c += p ){
                res.innerHTML += ` ${c}`
            }
        }else{
            for(c = i; c > m; c -= p ){
                res.innerHTML += ` ${c}`
            }
        }
    }
}