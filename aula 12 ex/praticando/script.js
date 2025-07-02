

let botao = document.querySelector('input#but')
botao.addEventListener('click', clicar)



function clicar() {

    let data = new Date()
    let ano = data.getFullYear()

    let inputAno = document.getElementById('txtano')
    let result = document.getElementById('res')

    if (inputAno.value.length == 0 || Number(inputAno.value) > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        let inputRadio = document.getElementsByName('radsex')
        let idade = ano - Number(inputAno.value)
        let genero = ''


        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (inputRadio[0].checked) {

            if (idade >= 0 && idade < 10) {
                genero = 'Criança'
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                genero = 'Jovem'
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 60) {
                genero = 'Adulto'
                img.setAttribute('src', 'adulto.jpg')
            } else {
                genero = 'Idoso'
                img.setAttribute('src', 'idoso.jpg')
            }

        } else {
            if (idade >= 0 && idade < 10) {
                genero = 'Criança'
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                genero = 'Jovem'
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade < 60) {
                genero = 'Adulto'
                img.setAttribute('src', 'adultoF.jpg')
            } else {
                genero = 'Idoso'
                img.setAttribute('src', 'idosa.jpg')
            }

        }
        result.style.textAlign = 'center'

        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        result.appendChild(img)
    }


}