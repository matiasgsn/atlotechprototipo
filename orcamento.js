// Caixas de Input
let cxLamp = document.querySelector('#nLamp')    // Lâmpadas
let cxTv = document.querySelector('#nTv');       // TVS
let cxTvC = document.querySelector('#nTvC');     // TVS Compatíveis
let cxAr = document.querySelector('#nAr');       // Ar condicionados
let cxArC = document.querySelector('#nArC');     // Ar condicionados compatíveis

let cxValor = document.querySelector('#vTotal')  // Valor final
let btnCalcular = document.querySelector('#btnCalcular') // Botão de Calcular Orçamento

// Valor por unidade
const vLamp = 1
const vTv = 1
const vTvC = 1
const vAr = 1
const vArC = 1

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
})



