function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Preencha os dados corretamente e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
           genero = 'Homen'
           if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'menino.png')
           } else if (idade < 30 ){
           //Joven
            img.setAttribute('src', 'homen-j.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homen-a.png')
            } else {
                //idoso 
                img.setAttribute('src', 'homen-i.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'mulher-j.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'mulher-a.png')
            } else {
                //idosa
                img.setAttribute('src', 'mulher-i.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} Anos.`
    }  res.appendChild(img)
  
}