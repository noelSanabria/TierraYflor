var nombre = document.getElementById("name"); 
var apellido = document.getElementById("lastname"); 
var correo = document.getElementById("email");
var clave = document.getElementById("password");

const formulario = document.getElementById("form");

var mensaje = document.getElementById("warnings");

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    let msj = "";
    let enviar = false;

    if(nombre.value.length < 3 || nombre.value.length > 10){
        msj = msj + "El nombre debe estar entre 3 y 10 caracteres";
        enviar = true;

    }

    var letra = nombre.value.charAt(0);
    console.log(letra);
    if(!esMayscula(letra)){
        msj += "<br>La primera letra debe ser mayúscula";
        enviar = true;
    }

    if(apellido.value.length < 3 || nombre.value.length > 10){
        msj = msj + "El nombre debe estar entre 3 y 10 caracteres";
        enviar = true;

    }

    var letra = apellido.value.charAt(0);
    console.log(letra);
    if(!esMayscula(letra)){
        msj += "<br>La primera letra debe ser mayúscula";
        enviar = true;
    }

    if(clave.value.length < 3 || clave.value.length > 10){
        msj = msj + "la contraseña debe tener entre 3 y 10 caracteres";
        enviar = true;

    }

    var letra = clave.value.charAt(0);
    console.log(letra);
    if(!esMayscula(letra)){
        msj += "<br>La contraseña dete tener al menos una mayúscula";
        enviar = true;
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