let btnMode = document.querySelector('#btnMode') // Botão de selecionar modo
let modeimg = document.querySelector('#modeimg') // Imagem do seletor de modo
let body = document.querySelector('body')

let selected = 0

btnMode.addEventListener('click', function(modeswap){
    console.log("Modo alterado")
    if (selected == 0) {
        selected = 1 
        document.body.setAttribute('data-bs-theme', 'dark')
        logo.classList.add('white')
        modeimg.setAttribute('src', 'lightmode.svg')
        
    } else {
        selected = 0
        document.body.setAttribute('data-bs-theme', 'light')
        logo.classList.remove('white')
        modeimg.setAttribute('src', 'darkmode.svg')
    }
})

