let numero = document.getElementById('numero')
let lista = document.getElementById('flista')
let resultado = document.getElementById('res')
let valores = []

function isNumero(n){
    // se o meu numero digitado for entre 1 e 100 ok se não falso
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inlista(n, l){
    // se o meu numero não estiver na lista ele da um ok se não ele da um erro
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar() {  

    // vai verificar se e um numero digitado e se o valor não esta na lista
    if (isNumero(numero.value) && !inlista(numero.value, valores)) {
        // adiciona o valor a minha lista
        valores.push(Number(numero.value))
        // faço os valores da lista aparecerem na tela
        let item = document.createElement('option')
        item.text = `o valor ${numero.value} foi adicionado`
        lista.appendChild(item)
    } else {
        
        alert('Valor invalido ou já encontrado em lista.')
    }
    // faz com que não precise ficar apagando o numero antigo para digitar um novo
    numero.value = ''
    numero.focus()
}


// ao clicar em finalizar me trazer os dados abaixo
function finalizar(){
    // se o tamanho do meu vetor for 0 isso se eu não adicionar nada me traga este alerta abaixo
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
        
    }else{
        // tot e o total dos valores na minha lista quantos elementos tem nela
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        // percorre os valores na minha lista
        for(let pos in valores){
            // soma os valores da minha lista
            soma += valores[pos]
            // me tras o maior valor da lista
            if (valores[pos] > maior){
                maior = valores[pos]
                // me tras o menor valor da lista
            }else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        // a media e a divisao da soma com o total dos meus elementos
        media = soma / tot
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados </p>`
        resultado.innerHTML += `<p>O maior valor é ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor é ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resultado.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
        
    }
}