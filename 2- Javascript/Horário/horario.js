function carregar() {

    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    var horas = window.document.getElementById('horas');
    var img = window.document.getElementById('imagem');
    var corpo = window.document.getElementById('corpo');



    if (hora >= 0 && hora < 5) {
        horas.innerText = `Boa madrugada, São ${hora}horas e ${minutos}minutos`
        img.src = 'madrugada.jpg'
        corpo.style.backgroundColor = '#20100D'
    }
    else if (hora < 12) {
        horas.innerText = `Bom dia, São ${hora}horas e ${minutos}minutos. `
        img.src = 'manha.jpg'
        corpo.style.backgroundColor = '#33949B'
    }
    else if (hora < 18) {
        horas.innerText = `Boa tarde, São ${hora}horas e ${minutos}minutos. `
        img.src = 'tarde.jpg'
        corpo.style.backgroundColor = '#C95E00'
    }
    else {
        horas.innerText = `Boa noite, São ${hora}horas e ${minutos}minutos. `
        img.src = 'noite.jpg'
        corpo.style.backgroundColor = '#19375D'
    }
}