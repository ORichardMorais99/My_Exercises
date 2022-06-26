function verificar() {
    let data = new Date()
    let ano = data.getFullyear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if( fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML =+ `Idade calculada: ${idade}.`
    }
}