'use strict'
window.addEventListener('load', ()=>{

   var formulario = document.querySelector("#formulario");
   var box_dashed = document.querySelector(".dashed");
   box_dashed.style.display ="none";

   formulario.addEventListener('submit', function(){
    console.log("Evento submit capturado");

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    //Validacion del formulario
    if (nombre.trim() == null || nombre.trim().length == 0) {
        alert("El nombre no es valido");
        document.querySelector("#error_nombre").innerHTML = "Nombre no valido";
        return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none";
    }

    if (apellidos.trim() == null || apellidos.trim().length == 0) {
        alert("Los apellidos no son validos");
        return false;
    }

    if (edad == null || edad <= 0 || isNaN(edad)) {
        alert("La edad no es valida");
        return false;
    }





    box_dashed.style.display ="block";

    //1ra forma de hacerlo
    /*var datos_usuario = [nombre, apellidos, edad];

        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }*/

    //2da forma de hacerlo: es crear varias etiquetas en html y luego aqui.
    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    
    





   });

});