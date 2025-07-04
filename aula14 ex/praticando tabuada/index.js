function tabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')

    let n = Number(num.value)
    tab.innerHTML = ''
    if(num.value.length == 0){
        alert('Digite um numero')
    }else{
        for(c = 1; c<=10; c++){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${n}`
            tab.appendChild(item)
        }
    }
}