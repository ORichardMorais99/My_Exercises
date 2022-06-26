function Contar() {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let resultado = document.getElementById('resultado')

    if (passo.value.length == 0) {
        alert('Você não colocou valor no campo "Passo", considerarei o valor igual a 1.')
        passo.value = 1
    }
    if(inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0 ) {
        alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        

        for(let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} `
        }

        for (let c = i; c >= f; c -= p) {
            resultado.innerHTML += `${c} `
        }
    }
    passo.value = ''
    inicio.value = ''
    fim.value = ''
}