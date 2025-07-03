function carregar(){
    let data = new Date()
    let hora = data.getHours()
    let resultado = document.getElementById('MENSAGEM')
    let msg = document.getElementById('conteudo')
    let back = document.getElementById('cor')
    let img = document.getElementById('img')

    if (hora >=6 && hora <= 12){
        msg.innerHTML=`Agora são ${hora} Horas.`
        resultado.innerHTML = `Bom dia`
        back.style.backgroundColor = '#FDE67F'
        img.src = 'manhã.jpg'


    }else if (hora < 18){
        msg.innerHTML=`Agora são ${hora} Horas.`
        resultado.innerHTML = `Boa tarde`
        back.style.backgroundColor = '#5F384B'
         img.src = 'tarde.jpg'
    }else{
        msg.innerHTML=`Agora são ${hora} Horas.`
        resultado.innerHTML = `Boa Noite`
        back.style.backgroundColor = '#081817'
         img.src = 'noite.jpg'
    }

}

function entrar(){
    let cor = document.getElementById('container')
    cor.style.backgroundColor = 'red'
    if(function saiu(){
        cor.style.backgroundColor = 'green'
    }){
        
    }
}