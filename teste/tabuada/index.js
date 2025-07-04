function tabuada() {
    let numero = document.getElementById('numero')
    let sel = document.getElementById('seltab')

    if (numero.value.length == 0) {
        alert("digite um numero!")
    } else {
        let n = Number(numero.value)
        sel.innerHTML = ""
        for (i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab ${n}`
            sel.appendChild(item)
        }

    }
}