//Função para criar a máscara do CPF
const mask = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2') //o $1 representa a primeira parte e o $2 a segunda parte e o ' . ' fica no meio dos 2 assim organizando do jeito que eu quero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')

    }
}

//Aqui eu chamo a função no campo cpf para usar a máscara
document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = mask[field](e.target.value)
    }, false)
})

/*dataset pega qualquer coisa que eu passar no input que tenha data alguma
como por exemplo o data-js*/

var form = document.getElementById('formulario')
var texto = document.getElementById('cpf');
var divCor = document.getElementById('mudaCor')

//Função para validar o CPF
function testaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

//Funções para mudar a cor da div de acordo com o resultado da validação
function cpfInvalido(divCor) {
    divCor.style.background = 'rgba(215, 46, 46, 0.5)';
    divCor.style.border = '2px solid red'
    divCor.innerText = "CPF inválido :/"

}
function cpfValido(divCor) {
    divCor.style.background = 'rgb(113, 194, 121, 0.5)';
    divCor.style.border = '2px solid green' 
    divCor.innerText = "CPF válido :D"
}

//Chamado da função que valida o CPF
function validarCPF(el) {
    if (!testaCPF(el.value)) {
        // apaga o valor
        el.value = "";
        cpfInvalido(divCor);
    }
    else {
        el.value = "";
        cpfValido(divCor);
    }
}