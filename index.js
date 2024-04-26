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
}

function styleWhiteRemove() { // Define os ícones a perderem o filtro .white
    // Logos da Atlo
    logoAtlo[0].classList.remove('white')
    logoAtlo[1].classList.remove('white')
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
let cxVen = document.querySelector('#nVen')     // Ventiladores
let cxVenC = document.querySelector('#nVenC')     // Ventiladores compatíveis
let cxOutC = document.querySelector('#nOutC')     // Outros dispositivos compatíveis

let cxValor = document.querySelector('#vTotal')  // Valor final
let btnCalcular = document.querySelector('#btnCalcular') // Botão de Calcular Orçamento
let cxVTotal = document.querySelector('#cxVTotal') // Caixa do Valor Total

let btnCalcularTxt = document.querySelector('#btnCalcularTxt') // Texto do Botão de Calcular
let btnCalcularSpn = document.querySelector('#btnCalcularSpn') // Spinner do Botão de Calcular

// Valor por unidade (ALTERAR PREÇOS AQUI)
const vLamp = 70.00 // Lâmpadas
const vTv = 120.00 // TVs
const vTvC = 39.90 // TVs Compatíveis
const vAr = 119.90 // Ar condicionados
const vArC = 49.90 // Ar condicionados compatíveis
const vVen = 170.00 // Ventiladores
const vVenC = 49.90 // Ventiladores compatíveis
const vOutC = 39.90 // Outros dispositivos compatíveis

// Loading do Cálculo
function loading() {
    btnCalcularSpn.classList.add('toggledoff')
    btnCalcularTxt.classList.remove('toggledoff')

    cxVTotal.classList.remove('toggledoff')
    btnCalcularTxt.textContent = "Calculado!"
    setTimeout(resetBtn, 3000)
}

function resetBtn () {
    btnCalcularTxt.textContent = "Calcular Investimento"
}

// Cálculo do Valor
btnCalcular.addEventListener('click', function(orcamentofinal) {
    // Valor inputado das Caixas
    let qtdLamp = cxLamp.value    // Lâmpadas
    let qtdTv = cxTv.value        // TVS
    let qtdTvC = cxTvC.value      // TVS Compatíveis
    let qtdAr = cxAr.value        // Ar condicionados
    let qtdArC = cxArC.value      // Ar condicionados compatíveis
    let qtdVen = cxVen.value      // Ventiladores
    let qtdVenC = cxVenC.value    // Ventiladores compatíveis
    let qtdOutC = cxOutC.value    // Outros dispositivos compatíveis

    let vtotal = (qtdLamp * vLamp) + (qtdTv * vTv) + (qtdTvC * vTvC) + (qtdAr * vAr) + (qtdArC * vArC) + (qtdVen * vVen) + (qtdVenC * vVenC) + (qtdOutC * vOutC)
    cxValor.value = "R$" + parseFloat(vtotal).toFixed(2).replace('.', ',')
    orcamentofinal.preventDefault()

    cxVTotal.classList.add('toggledoff')
    btnCalcularTxt.classList.add('toggledoff')
    btnCalcularSpn.classList.remove('toggledoff')
})

let btnContato = document.querySelector("#btnContato")
let btnContatoIcon = document.querySelector("#btnContatoIcon")

btnContato.addEventListener('mouseover', function(glowup) {
    btnContatoIcon.classList.remove('white')
    btnContatoIcon.classList.add('whatsapp-green')
})

btnContato.addEventListener('mouseout', function(glowdown) {
    btnContatoIcon.classList.remove('whatsapp-green')
    btnContatoIcon.classList.add('white')
})

