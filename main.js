const campo1 = document.getElementById('number1')
const campo2 = document.getElementById('number2')
const form = document.getElementById('form')
const erro = document.getElementById('errorMSG')
const certo = document.getElementById('successMSG')

form.addEventListener('submit', validacao)

function validacao (evento){
    evento.preventDefault()
    if (campo1.value > campo2.value) {
        erro.classList.add('nada')
        erro.classList.remove('tudo')
        certo.classList.add('tudo')
        certo.classList.remove('nada')
    }
    else{
        erro.classList.add('tudo')
        erro.classList.remove('nada')
        certo.classList.add('nada')
        certo.classList.remove('tudo')
    }
}