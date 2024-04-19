let btnMode = document.querySelector('#btnMode') // Botão de selecionar modo
let modeimg = document.querySelector('#modeimg') // Imagem do seletor de modo
let body = document.querySelector('body')

let selected = 0


// Estilos de Cor

let logoAtlo = document.querySelectorAll('#logo') // Logo da Atlo
let iconWhatsapp = document.querySelector('#whatsapp') // Ícone do Whatsapp
function styleWhiteAdd() { // Define os ícones a receberem o filtro .white
    // Logos da Atlo
    logoAtlo[0].classList.add('white')
    logoAtlo[1].classList.add('white')

    // Whatsapp
    iconWhatsapp.classList.remove('atlo-primary')
    iconWhatsapp.classList.add('white')
}

function styleWhiteRemove() { // Define os ícones a perderem o filtro .white
    // Logos da Atlo
    logoAtlo[0].classList.remove('white')
    logoAtlo[1].classList.remove('white')

    // Whatsapp
    iconWhatsapp.classList.remove('white')
    iconWhatsapp.classList.add('atlo-primary')
}

btnMode.addEventListener('click', function(modeswap){
    console.log("Modo alterado")
    if (selected == 0) {
        selected = 1 
        document.body.setAttribute('data-bs-theme', 'dark')
        styleWhiteAdd()
        modeimg.setAttribute('src', 'lightmode.svg')
        
    } else {
        selected = 0
        document.body.setAttribute('data-bs-theme', 'light')
        styleWhiteRemove()
        modeimg.setAttribute('src', 'darkmode.svg')
    }
})

