function verificar() {

    let data = new Date()
    let ano = data.getFullYear()

    // variaveis onde assumem os valores do html
    let input = document.getElementById('idad')
    let res = document.getElementById('res')

    // se o valor no input for igual a 0 ou maior q o ano (2025)
    // trará o alerta
    if (input.value.length == 0 || input.value > ano) {
        alert('Verifique os Dados e tente novamente')

        // se não trara as informações abaixo
    } else {
        // variavel que assume o input radio
        let sex = document.getElementsByName('sex')

        // variavel de conta idade recebe ano(2025) - o valor do input
        // exemplo: 2025 - 2000 = 25 anos
        let idade = ano - Number(input.value)
        let genero = ''

        // mesma coisa que ir no html e criar um img com id de foto
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // se o input radio 0 que e o masculino estiver clicado o genero sera homem se não mulher
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {

                // atribui um src a minha imagem
                genero = 'Menino'
                img.setAttribute('src', 'menino.jpg')

            } else if (idade >= 10 && idade < 21) {

                genero = 'Jovem'
                img.setAttribute('src', 'jovemM.jpg')

            } else if (idade < 60) {

                genero = 'Adulto'
                img.setAttribute('src', 'adulto.jpg')

            } else {
                genero = 'idoso'
                img.setAttribute('src', 'idoso.jpg')

            }
            // se o input feminino estiver checado sera o resultado abaixo com base na idade
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                genero = 'menina'
                img.setAttribute('src', 'menina.jpg')
            } else if (idade >= 10 && idade < 21) {
                genero = 'jovem'
                img.setAttribute('src', 'jovemF.jpg')

            } else if (idade < 60) {
                genero = 'Mulher adulta'
                img.setAttribute('src', 'adultoF.jpg')


            } else {
                genero = 'idosa'
                img.setAttribute('src', 'idosa.jpg')
            }
        }

        // estilo para centralizar o texto em java script
        res.style.textAlign = 'center'

        // tras a mensagem para o cliente com seu genero e idade
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
    }
}