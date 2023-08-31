function carregar () {
    let txt = document.getElementById('txt')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
  // let hora = 18
    txt.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        img.src= 'Manha.jpg'
        document.body.style.background= '#d8b192'
    } else if (hora >= 12 && hora < 18) {
        img.src= 'tarde.jpg'
        document.body.style.background= '#7c3e17'
    } else {
        img.src= 'noite.jpg'
        document.body.style.background= '#305083'
    }
}