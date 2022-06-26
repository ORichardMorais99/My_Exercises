function verificar() {
    let horas = document.querySelector('input#horas')
    let resposta = document.querySelector('div#resposta')

    if (horas.value >= 0 && horas.value <= 24) {
        alert(`Agora são ${horas.value}h.`)
        resposta.innerText = `Agora são ${horas.value}h.`
    }
    
    if (horas.value >= 0 && horas.value <= 12){
        resposta.innerText += `\nBom dia!`
        document.body.style.background = 'red'
    } 
    
    else if(horas.value > 12 && horas.value <= 18) {
        resposta.innerText += `\nBoa tarde!`
        document.body.style.background = 'pink'
    }

    else if(horas.value > 18 && horas.value <= 24) {
        resposta.innerText += '\nBoa noite!'
        document.body.style.background = 'green'
    }

    else if (horas.value < 0 || horas.value > 24) {
        alert('HORÁRIO INVÁLIDO!')
        resposta.innerText = `\nLamento! Horário inválido!`
        
    }

    horas.value = ' '
    
}

