let btnMode = document.querySelector('#btnMode')
let body = document.querySelector('body')
let lightmodeimg = document.querySelector('#modeimg')
let selected = 0

btnMode.addEventListener('click', function(modeswap){
    console.log("Modo alterado")
    if (selected == 0) {
        selected = 1 
        document.body.setAttribute('data-bs-theme', 'dark')
        modeimg.setAttribute('src', 'lightmode.svg')
    } else {
        selected = 0
        document.body.setAttribute('data-bs-theme', 'light')
        modeimg.setAttribute('src', 'darkmode.svg')
    }
})