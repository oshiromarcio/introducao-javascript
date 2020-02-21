var botaoInput = document.querySelector("#adicionar-paciente");

botaoInput.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    // Valida os dados digitados
    var mensagensErros = validaPaciente(paciente);
    if (mensagensErros.length > 0) {
        exibeMensagensDeErro(mensagensErros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    form.reset();

    var errosForm = document.querySelector("#mensagens-erro");
    errosForm.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {
    var mensagensErros = [];

    if (paciente.nome.length == 0)
        mensagensErros.push("Informe o nome do paciente.");

    if (paciente.peso.length == 0)
        mensagensErros.push("Informe o peso.");

    else if (!validaPeso(paciente.peso))
        mensagensErros.push("Peso inválido!");

    if (paciente.altura.length == 0)
        mensagensErros.push("Informe a altura.");

    else if (!validaAltura(paciente.altura))
        mensagensErros.push("Altura inválida!");

    if (paciente.gordura.length == 0)
        mensagensErros.push("Informe o percentual de gordura.");

    else if (paciente.gordura.value >= 100)
        mensagensErros.push("Percentual de gordura inválido.");

    return mensagensErros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
