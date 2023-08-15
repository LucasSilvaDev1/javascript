function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
   // var hora = 20
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA d8b192
        img.src = 'Manha.jpg'
        document.body.style.background = '#d8b192'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#7c3e17'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#305083'
    }
    
}