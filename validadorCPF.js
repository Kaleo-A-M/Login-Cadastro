function validaCPF(cpf) {
    var soma = 0;
    var resto;

    if (cpf == "00000000000") return false;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

var cpfInput = document.getElementById('cpf');
var messageSpan = document.getElementById('span');

cpfInput.addEventListener('change', function () {
    var isValid = validaCPF(this.value);
    if (!isValid) {
        this.style.borderBottom = "2px solid red";
        span.style.display = 'block'
        span.style.color = 'red'
        span.textContent = "CPF não é válido, verifique se tem pontos ou simbolos";
        span.style.fontSize = '15px';
        span.style.margin = '5px'
    } else {
        this.style.borderBottom = "2px solid green";
        span.style.display = 'block'
        span.style.color = 'green'
        span.textContent = "CPF válido";
        span.style.margin = '5px'
    }
});

cpfInput.addEventListener('input', function () {
    this.style.borderBottom = '';
    span.textContent = '';
});