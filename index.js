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

// Orçamento
// Caixas de Input
let cxLamp = document.querySelector('#nLamp')    // Lâmpadas
let cxTv = document.querySelector('#nTv')       // TVS
let cxTvC = document.querySelector('#nTvC')     // TVS Compatíveis
let cxAr = document.querySelector('#nAr')       // Ar condicionados
let cxArC = document.querySelector('#nArC')     // Ar condicionados compatíveis

let cxValor = document.querySelector('#vTotal')  // Valor final
let btnCalcular = document.querySelector('#btnCalcular') // Botão de Calcular Orçamento
let cxVTotal = document.querySelector('#cxVTotal') // Caixa do Valor Total

let btnCalcularTxt = document.querySelector('#btnCalcularTxt') // Texto do Botão de Calcular
let btnCalcularSpn = document.querySelector('#btnCalcularSpn') // Spinner do Botão de Calcular

// Valor por unidade
const vLamp = 1
const vTv = 1
const vTvC = 1
const vAr = 1
const vArC = 1

function loading() {
    btnCalcularSpn.classList.add('toggledoff')
    btnCalcularTxt.classList.remove('toggledoff')

    cxVTotal.classList.remove('toggledoff')
    btnCalcularTxt.textContent = "Calculado!"
    setTimeout(resetBtn, 3000)
}

function resetBtn () {
    btnCalcularTxt.textContent = "Calcular Custo"
}

btnCalcular.addEventListener('click', function(orcamentofinal) {
    // Valor inputado das Caixas
    let qtdLamp = cxLamp.value    // Lâmpadas
    let qtdTv = cxTv.value        // TVS
    let qtdTvC = cxTvC.value      // TVS Compatíveis
    let qtdAr = cxAr.value        // Ar condicionados
    let qtdArC = cxArC.value      // Ar condicionados compatíveis

    let vtotal = (qtdLamp * vLamp) + (qtdTv * vTv) + (qtdTvC * vTvC) + (qtdAr * vAr) + (qtdArC * vArC)
    cxValor.value = vtotal
    orcamentofinal.preventDefault()

    btnCalcularTxt.classList.add('toggledoff')
    btnCalcularSpn.classList.remove('toggledoff')
})

