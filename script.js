function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    const image = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        image.setAttribute('src', 'avatar-light-ternopreto.png')
        image.setAttribute('alt', 'Foto de perfil de Marcio Inacio, usando óculos e um terno preto, camisa interna branca e gravata preta, maos cruzadas')
    } else {
        image.setAttribute('src', 'Avatar_Marcio.png')
            }

}

