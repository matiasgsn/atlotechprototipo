let btnMode = document.querySelector('#btnMode') // Botão de selecionar modo
let modeimg = document.querySelector('#modeimg') // Imagem do seletor de modo
let body = document.querySelector('body')
let logo = document.querySelectorAll('#logo')

let selected = 0

btnMode.addEventListener('click', function(modeswap){
    console.log("Modo alterado")
    if (selected == 0) {
        selected = 1 
        document.body.setAttribute('data-bs-theme', 'dark')
        logo[0].classList.add('white')
        logo[1].classList.add('white')
        modeimg.setAttribute('src', 'lightmode.svg')
        
    } else {
        selected = 0
        document.body.setAttribute('data-bs-theme', 'light')
        logo[0].classList.remove('white')
        logo[1].classList.remove('white')
        modeimg.setAttribute('src', 'darkmode.svg')
    }
})

