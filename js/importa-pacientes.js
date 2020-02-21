var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientesa");

    var mensagemImportacao = document.querySelector("#mensagem-importacao");
    xhr.addEventListener("load", function() {
        console.log(xhr.status);
        if (xhr.status == 200) {
            mensagemImportacao.innerHTML = "";
            mensagemImportacao.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else {
            mensagemImportacao.textContent = "Error " + xhr.status;
            mensagemImportacao.classList.remove("invisivel");
        }
    });
    xhr.send();

});