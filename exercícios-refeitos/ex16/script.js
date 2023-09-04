function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('Fim')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerText = "impossivel contar!"
    }else {
        res.innerHTML = 'Contando!'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Impossivel contar!, considerando passo 1!')
            let p = 1
        } if (i < f) {
            //contagem crescente
            for (let c = i;c < f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regresiva 
            for(let c = i; c >= f;c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}