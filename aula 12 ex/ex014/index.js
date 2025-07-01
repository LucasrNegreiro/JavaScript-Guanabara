
function carregar(){
    // VARIAVEIS ONDE ASSUMEM O ID DO CONTEUDO NO HTML
    let mensagem = document.getElementById('conteudo')
    let img = document.getElementById('img')
    let msg = document.getElementById('MENSAGEM')
    let corFundo= document.getElementById('cor')

    // VARIAVEIS ONDE A DATA VAI ASSUMIR AS HORAS DO COMPUTADOR
    let data = new Date()
    let hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} Horas.`

    // SE FOR ENTRE 6 HRS E  12 SERA BOM DIA
    if(hora >= 6 && hora < 12){
        msg.innerHTML='Bom dia'

        // A VARIAVEL IMAGEM IRA ALTERAR A IMAGEM DO DOCUMENTO EM HTML NO SITE
        img.src = 'manhã.jpg'
        
        // ALTERA A COR DE FUNDO DE ACORDO COM A IMAGEM CONFORME PEGUEI NO COLORZILLA
        corFundo.style.backgroundColor = '#E9BE25'

        // SE NÃO E FOR ENTRE 12 E 18 SERA BOA TARDE
    }else if (hora >= 12 && hora < 18){
        msg.innerHTML = 'Boa tarde'
        img.src = 'tarde.jpg'
        corFundo.style.backgroundColor = ' #AE7860'
        
        // SE NÃO SERA BOA NOITE ATE 5 DA MANHÃ
    }else{
        msg.innerHTML = 'boa noite'
        img.src = 'noite.jpg'
        corFundo.style.backgroundColor = '#071C1F'
    }

    
}
