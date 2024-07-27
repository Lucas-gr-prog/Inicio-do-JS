const campo1 = document.getElementById('number1')
const campo2 = document.getElementById('number2')
const form = document.getElementById('form')
const erro = document.getElementById('errorMSG')
const certo = document.getElementById('successMSG')

form.addEventListener('submit', validacao)

function validacao (evento){
    evento.preventDefault()
    if (campo1.value > campo2.value) {
        alert('Deu Bom')
        erro.classList.add('correto')
        erro.classList.remove('errado')
        certo.classList.add('errado')
        certo.classList.remove('correto')
    }
    else{
        alert('Deu ruim')
        erro.classList.add('errado')
        erro.classList.remove('correto')
        certo.classList.add('correto')
        certo.classList.remove('errado')
    }
}