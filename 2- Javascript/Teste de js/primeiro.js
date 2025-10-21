function voto(){
let idade = window.document.getElementById('idade')
 
let resposta = window.document.getElementById('resposta')
let anosdeidade = Number(idade.value)
 
if (anosdeidade >= 18 && anosdeidade <= 70)
    resposta.innerText = "Voto obrigatório"
else if (anosdeidade >= 16 && anosdeidade <= 18 || anosdeidade > 70)  
    resposta.innerText = "Voto facultativo"
else if(anosdeidade < 16)
    resposta.innerText = "Você não tem idade para votar"

}
 