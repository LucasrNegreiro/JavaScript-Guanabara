
let botao = document.getElementById('but')
    botao.addEventListener('click', clicar)

    function clicar(){
        let data = new Date()
        let ano = data.getFullYear()
        let input = document.getElementById('txtano')

        if(input.value.length == 0 || Number(input.value) > ano){
            alert('[ERROR] Verifique os dados e tente novamente!')
        }else{
            let inputRadio = document.getElementsByName('radsex')
            let idade = ano - Number(input.value)
            let resultado = document.getElementById('res')
            let genero = ''


            

            if(inputRadio[0].checked){
                if(idade < 4){
                    genero = 'Bebê'
                    resultado.innerHTML = `Detectamos um ${genero} com ${idade} ano`
                    
                }
                else if(idade >=4 && idade <13){
                    genero = 'menino'
                    resultado.innerHTML = `Detectamos um ${genero} com ${idade} anos`
                }else if(idade < 21){
                    genero = 'jovem'
                    resultado.innerHTML = `Detectamos um${genero} com ${idade} anos`
                }else if(idade < 60){
                    genero = 'Homem adulto'
                    resultado.innerHTML = `Detectamos  um ${genero} com ${idade} anos`
                    }else{
                        genero = 'Idoso'
                        resultado.innerHTML = `Detectamos  um ${genero} com ${idade} anos`
                    }
            }else{
                if(idade < 4){
                    genero = 'Bebê'
                    resultado.innerHTML = `Detectamos ${genero} com ${idade} ano`
                }
                else if(idade >=4 && idade <13){
                    genero = 'menina'
                    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
                }else if(idade < 21){
                    genero = 'jovem'
                    resultado.innerHTML = `Detectamos uma ${genero} com ${idade} anos`
                }else if(idade < 60){
                    genero = 'Mulher adulta'
                    resultado.innerHTML = `Detectamos  uma ${genero} com ${idade} anos`
                    }else{
                        genero = 'Idosa'
                        resultado.innerHTML = `Detectamos  uma ${genero} com ${idade} anos`
                    }
            }
            resultado.style.textAlign ='center'
            
        }

    }