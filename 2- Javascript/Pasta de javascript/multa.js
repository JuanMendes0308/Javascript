function multa(){
    let velocidade = window.document.getElementById('vel')
    let resposta = window.document.getElementById('resp')
    let velocidade2 = Number(velocidade.value)

    if(velocidade2 >= 60){
        resposta.innerText = `Você receberá multa`
    }
    else{
        resposta.innerText = `Está tudo ok`
    }
}