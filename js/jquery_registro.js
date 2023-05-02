$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var correo = $("#email").val();
        var contraseña = $("#contraseña").val();
        var contraseña = $("#password").val();

        var msj = "";
        let enviar = false;

        if(nombre.trim().length < 3 || nombre.trim().length > 10){
            msj += "El nombre debe estar entre 3 y 10 caracteres";
            enviar = true;
        }

        var letra = nombre.charAt(0);
        if(!esMayscula(letra)){
            msj += "<br>Debe comenzar con mayúscula";
            enviar = true;
        }

        if(apellido.trim().length < 3 || apellido.trim().length > 10){
            msj += "El nombre debe estar entre 3 y 10 caracteres";
            enviar = true;
        }

        var letra = apellido.charAt(0);
        if(!esMayscula(letra)){
            msj += "<br>Debe comenzar con mayúscula";
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

});