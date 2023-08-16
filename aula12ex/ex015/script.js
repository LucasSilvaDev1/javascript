function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var género = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            género = 'Homen'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 30) {
                //joven
                img.setAttribute('src', 'homen-j.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homen-a.png')
            } else {
                //idoso
                img.setAttribute('src', 'homen-i.png')
            }
        } else if (fsex[1].checked) {
            género = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 30) {
                //joven
                img.setAttribute('src', 'mulher-j.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-a.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-i.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
     }   res.appendChild(img)
}