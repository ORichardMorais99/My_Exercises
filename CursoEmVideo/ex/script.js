function verificar () {
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os daods e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fAno.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino_bebe.jpg')
                document.body.style.background = 'rgb(218, 165, 32)'
            } else if (idade < 21){
                img.setAttribute('src', 'menino_jovem.jpg')
                document.body.style.background = 'rgb(188, 143, 143)'
            } else if (idade < 50){
                img.setAttribute('src', 'homem_adulto.jpg')
                document.body.style.background = 'rgb(109, 215, 7)'
            } else {
                img.setAttribute('src', 'homem_idoso.jpg')
                document.body.style.background = 'rgb(98, 10, 290)'
            }
        } else if(fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina_bebe.jpg')
                document.body.style.background = 'rgb(10, 199, 115)'
            } else if (idade < 21){
                img.setAttribute('src', 'menina_jovem.jpg')
                document.body.style.background = 'rgb(107, 26, 200)'
            } else if (idade < 50){
                img.setAttribute('src', 'mulher_adulta.jpg')
                document.body.style.background = 'rgb(95, 89, 98)'
            } else {
                img.setAttribute('src', 'mulher_idosa.jpg')
                document.body.style.background = 'rgb(55, 134, 17)'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}