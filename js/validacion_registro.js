var nombre = document.getElementById("name"); 
var correo = document.getElementById("email");
var clave = document.getElementById("password");

const formulario = document.getElementById("form");

var mensaje = document.getElementById("warnings");

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    let msj = "";
    let enviar = false;

    if(nombre.value.length < 4 || nombre.value.length > 10){
        msj = msj + "El nombre debe estar entre 4 y 10 caracteres";
        enviar = true;

    }

    var letra = nombre.value.charAt(0);
    console.log(letra);
    if(!esMayscula(letra)){
        msj += "<br>La primera letra debe ser mayúscula";
        enviar = true;
    }

    if(nombre.value == "Victor"){
        msj += "<br>El nombre no debe ser Victor";
        enviar = true;
    }

    if(enviar){
        mensaje.innerHTML = msj;
    }
    else{
        mensaje.innerHTML = "Enviado";
    }
});


function esMayscula(letra){
    if(letra === letra.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}