function gerar() {
    let num = document.getElementById('numtx')
    let tab = document.getElementById('sele')
    if (num.value.length == 0) {
        window.alert('Digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML= ''
        
         while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
     } 
    }
    }