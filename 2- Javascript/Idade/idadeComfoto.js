function Idade() {
    let corpo = window.document.getElementById('corpo')
    let imagem = window.document.getElementById('alguem')
    let resposta = window.document.getElementById('resp')
    let idade = window.document.getElementById('idade')
    let sexo = window.document.getElementsByName('sexo')

    let anos = Number(idade.value)
    let anoAtual = 2025 - anos
    let genero = ''

    if (sexo[0].checked) {
        genero = 'M'
    } else {
        genero = 'F'
    }

    switch (genero) {
        case 'M':
            if (anoAtual > 125 || anoAtual < 1) {
                resposta.innerText = 'ERRO - Digite uma data válida (De 1900 á 2025'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2024')
                imagem.style.display = 'none'
            }
            else if (anoAtual <= 2) {
                resposta.innerText = `Você é um bebê de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'bebemenino.png'
            }
            else if (anoAtual < 14) {
                resposta.innerText = `Você é uma criança de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'child-248266_1280.jpg'
            }
            else if (anoAtual < 18) {
                resposta.innerText = `Você é um adolescente de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'adolescentemasc.jpg'
            }
            else if (anoAtual < 65) {
                resposta.innerText = `Você é um adulto de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'man-5057797_1280.jpg'
            }
            else {
                resposta.innerText = `Você é um idoso de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'idoso.jpg'
            }
            break

        case 'F':
            if (anoAtual > 125 || anoAtual < 1) {
                resposta.innerText = 'ERRO - Digite uma data válida (De 1900 á 2025'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2024')
                imagem.style.display = 'none'
            }

            else if (anoAtual <= 2) {
                resposta.innerText = `Você é um bebê de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'baby-6031121_1280.jpg'
            }
            else if (anoAtual < 14) {
                resposta.innerText = `Você é uma criança de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'girl-1250679_1280.jpg'
            }
            else if (anoAtual < 18) {
                resposta.innerText = `Você é um adolescente de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'adolescentefem.jpg'
            }
            else if (anoAtual < 65) {
                resposta.innerText = `Você é um adulto de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'woman-3282604_1280.jpg'
            }
            else {
                resposta.innerText = `Você é um idoso de ${anoAtual} anos!`
                imagem.style.display = 'block'
                imagem.style.margin = 'auto'
                imagem.style.paddingBottom = '10px'
                imagem.src = 'granny-1280445_1280.jpg'
            }
            break
    }
}