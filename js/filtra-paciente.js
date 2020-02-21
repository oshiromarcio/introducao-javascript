var filtro = document.querySelector("#filtro-nome");

filtro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        var expressao = new RegExp(this.value, "i");
        pacientes.forEach(function(paciente) {
            if (!expressao.test(paciente.querySelector(".info-nome").textContent)) {
                paciente.classList.add("invisivel");
            }
            else {
                paciente.classList.remove("invisivel");
            }
        });
    }
    else {
        console.log("else");
        pacientes.forEach(function(paciente) {
            paciente.classList.remove("invisivel");
        });
    }
    
});

