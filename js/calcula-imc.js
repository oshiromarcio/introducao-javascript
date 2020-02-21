var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

// Trata os dados de cada paciente
pacientes.forEach(function(paciente) {

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido)
        tdPeso.textContent = "Peso inválido!";
    if (!alturaValida)
        tdAltura.textContent = "Altura inválida!";

    if (pesoValido && alturaValida)
    {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
    else
    {
        tdImc.textContent = "Peso e/ou altura inválidos!";
        paciente.classList.add("paciente-invalido");
    }
});

function validaPeso(peso) {
    if (peso <= 0 || peso >= 600)
        return false;
    return true;
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3)
        return false;
    return true;
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
