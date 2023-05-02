$(document).ready(function(){
  $("#form").submit(function(e){
      e.preventDefault();
      var nombre = $("#nombre").val();
      var apellido = $("#apellido").val();
      var correo = $("#correo").val();
      var clave = $("#contraseña").val();

      var msj = "";
      let enviar = false;

      if(nombre.trim().length < 4 || nombre.trim().length > 10){
          msj += "El nombre debe tener entre 4 y 10 caracteres";
          enviar = true;
      }

      var letra = nombre.charAt(0);
      if(!esMayscula(letra)){
          msj += "<br>Debe comenzar con mayúscula";
          enviar = true;
      }

      if(apellido.trim().length < 4 || apellido.trim().length > 10){
        msj += "El Apellido debe tener entre 4 y 10 caracteres";
        enviar = true;
    }

    var letra = apellido.charAt(0);
    if(!esMayscula(letra)){
        msj += "<br>Debe comenzar con mayúscula";
        enviar = true;
    }

      if(enviar){
          $("#warnings").html(msj);
      }
      else{
          $("#warnings").html("Enviado");
      }

      if(correo.trim().length < 5 || correo.indexOf("@") == -1 || correo.indexOf(".") == -1){
    msj += "<br>El correo electrónico no es válido";
    enviar = true;
}

if(clave.trim().length < 6 || clave.trim().length > 12){
  msj}"<br>La contraseña debe tener entre 6 y 12 caracteres";enviar = true;});

  if(clave != repetir_clave){
    msj += 
    msj +=
  msj
    ms

   
"<br>Las contraseñas no coinciden";
    enviar = 
   
true;
  }



 
if(enviar){
      $(
     
"#warnings").html(msj);
  }

else{
      $(
     
"#warnings").html("Enviado");
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

  function esMayscula(letra){
      if(letra === letra.toUpperCase()){
          return true;
      }
      else{
          return false;
      }
  }
