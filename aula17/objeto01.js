let amigo = {nome: 'lucas',sexo: 'M', peso:'97', engordar(p = 0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(3)
console.log(amigo)