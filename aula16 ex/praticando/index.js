let num = document.getElementById('numero')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function list(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function nlist(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else
    return false
}

function adicionar(){
    if(list(num.value) && !nlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        alert('Numero invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0 ){
        alert('Adicione valores antes de finalizar')
    }else{
        
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }

        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados </p>`
        res.innerHTML += `<p>Nosso maior numero é ${maior}</p>`
        res.innerHTML += `<p>Nosso menor numero é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>a media é ${media}</p>`
    }

     
        
        
}