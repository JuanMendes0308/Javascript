let numeros = document.getElementById('adicionar')
let lista = document.getElementById('flista')
let res = document.querySelector('div#resp')
let valores = []

numeros.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        botao_adicionar.click();
    }
})

function adicionar(){
    if(validar3() == true){
    valores.push(Number(numeros.value))
    let item = document.createElement('option')
    item.text = `Valor ${numeros.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
    } else{
        alert("O numero de valores a serem calculados não pode exceder 3")
    }
}
numeros.value = ''
numeros.focus()
 
function validar3(){
    if (valores.length > 2){
        return false
    } else {
        return true
    }
}
function calcular_media(){
    let media = 0
    let soma = 0
 
    if(valores.length <= 0){
        window.alert('Insira valores a serem calculados')
    }else{
       
        for (let i in valores){
            soma += Number(valores[i])
        }
        media = soma / valores.length
        res.innerHTML = `${media}`
}
}