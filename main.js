const form = document.getElementById('deposito_form');
const nomeBeficiario = document.getElementById('nome_beneficiario');



form.addEventListener('submit', enviar)
nomeBeficiario.addEventListener('keyup', confirmacao) 

function confirmacao (evento){
    formEValido = validaNome(evento.target.value)
    if (!formEValido) {
        nomeBeficiario.classList.remove('correct');
        nomeBeficiario.classList.add('error');
        document.querySelector('.errorMSG').style.display = 'block';
    } else {
        nomeBeficiario.classList.remove('error');
        nomeBeficiario.classList.add('correct');
        document.querySelector('.errorMSG').style.display = 'none'
    }
}

function enviar (elemento) {
    let formEValido = false
    elemento.preventDefault();

    const numeroContaBeneficiario = document.getElementById ('conta');
    const valorDeposito = document.getElementById ('valor_deposito');
    const mensagemSucesso = `Quantia de: <b>${valorDeposito.value}</b> foi depositado para o cliente: <b>${nomeBeficiario.value}</b> - Conta <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeficiario.value)
    if (formEValido) {
        const conteinerMensagemSucesso = document.querySelector('.successMessage');
        conteinerMensagemSucesso.innerHTML = mensagemSucesso;
        conteinerMensagemSucesso.style.display = 'block';

        nomeBeficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        nomeBeficiario.style.border = '1px solid red'
        document.querySelector('.errorMSG').style.display = 'block';
    }
}

function validaNome(nomeCompleto) {
    const arrayDoNome = nomeCompleto.split(' ');
    return arrayDoNome.length >= 2; 
}

// Poderia usar no lugar do 'keyup' o 'change', mas preferi deixar assim pois o usuário não precisa preencher todo o formulário//


// Alguns tipos de "addEventListener('...')"

//  • click: Ocorre quando o usuário clica em um elemento. 
//  • mouseover: Ocorre quando o cursor do mouse é colocado sobre um elemento. 
//  • mouseout: Ocorre quando o cursor do mouse deixa um elemento. 
//  • mousedown: Ocorre quando o botão do mouse é pressionado em um elemento. 
//  • mouseup: Ocorre quando o botão do mouse é liberado em um elemento.
//  • keydown: Ocorre quando uma tecla é pressionada.
//  • keyup: Ocorre quando a tecla é solta.
//  • keypress: Ocorre quando uma tecla é pressionada e liberada.
//  • submit: Ocorre quando um formulário é submetido. 
//  • input: Ocorre quando o valor de um campo de entrada é alterado.
//  • load: Ocorre quando a página é completamente carregada. 
//  • resize: Ocorre quando a janela do navegador é redimensionada. 
//  • scroll: Ocorre quando a página é rolada.
