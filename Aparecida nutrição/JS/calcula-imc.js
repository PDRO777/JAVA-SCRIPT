
var titulo = document.querySelector(".titulo"); //é melhor usarmos seletores css ao inves de tags em HTML, porque se alguem alterar a tag HTML o codigo JS nao sofre alteração
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".pacientes");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){ // || essas dias barras significa OU
        console.log("Peso invalido");
        pesoValido = false;
        tdImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
        
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura invalida!");
        alturaValida = false;
        tdImc.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido){
        var imc = calculaImc(peso, altura); // 100 / 2.0 * 2.0 = 100 / 4 =>>>>>> 25
        tdImc.textContent = imc;
    }
}


function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}




