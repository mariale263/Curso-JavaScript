'use strict'

//EVENTOS
 //Evento load: es como el evento ready de jquery, y es que hace que cargue la pagina para poder hacer los eventos.
window.addEventListener('load', function(){ //o ('load', ()=>{} forma simplificada)
    //Es una funcion que se ejecuta cuando se sucede algo


    //Eventos del Ratón

    //var boton = document.querySelector("#boton");

    function cambiarColor(){
        var bg = boton.style.background;
        if( bg == "green"){
        boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
    return true;
    }

    //para no usar el evento onclick dentro del codigo de html:

    var boton = document.querySelector("#boton");

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    //Evento Click

    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = "10px solid black";
        /*
        this: con this hace referencia al objeto al cual yo 
        estoy haciendo click en ese momento, en este caso es boton.
        */
    });

    //Evento Mouse over

    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc";
    })

    //Evento mouseout
    boton.addEventListener('mouseout', function(){
        boton.style.background = "black";
    })

    //Evento focus: cuando hacemos el foco
    var input= document.querySelector("#campo_nombre");

    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    })

    //Evento blur: cuando salimos del foco
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    })

    //Evento Keydown: Sucede cuando se escribe cuando se pulsa una tecla
    input.addEventListener('keydown', function(){
        console.log("Pulsando tecla", String.fromCharCode(event.keyCode));
    })

    //Evento keypress: que es cuando presiono una tecla, cuando ya se ha pulsado
    input.addEventListener('keypress', function(){
        console.log("Pulsando tecla", String.fromCharCode(event.keyCode));
    })

    //Evento Keyup: Nos permite capturar el evento cuando levanto el dedo de la tecla
    input.addEventListener('keyup', function(){
        console.log("Tecla soltada", String.fromCharCode(event.keyCode));
    })
});

