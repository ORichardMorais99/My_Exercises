function enviar() {
    let horas = document.querySelector('input#horas')
    let resposta = document.querySelector('p#resposta')

    if(Number(horas.value) == 0) {
        alert('A caixa está vazia!')
    }
        horas.value = ''
        resposta.value = ''

    if (horas.value < 0 || horas.value > 24) {
        alert('Lamento, amigo, mas esse horário não existe!')
        resposta.innerHTML = `O horário que você digitou (${horas.value}h), não existe.`
    }


        if (horas.value > 0 && horas.value <= 12) {
            resposta.innerHTML += `<p>Agora são ${horas.value}h.</p>`
            resposta.innerHTML += '<p>Bom dia!</p>'
        } else if (horas.value > 12 && horas.value < 18) {
            resposta.innerHTML += `<p>Agora são ${horas.value}h.</p>`
            resposta.innerHTML += '<p>Boa tarde!</p>'
        } else {
            resposta.innerHTML += `<p>Agora são ${horas.value}h.</p>`
            resposta.innerHTML += '<p>Boa noite!</p>'
        }
        horas.value = ''
        resposta.value = ''
        
}