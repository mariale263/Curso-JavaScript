'use strict'

//BOM - Browser Object Model
function getBom(){
    //console.log(window.innerWidth);//para ver q tamaño en anchura tiene la ventana en este momento
    //console.log(window.innerHeight);//para ver q tamaño en altura tiene la ventana en este momento
    // de esa forma se puede acceder a las propiedades de la pantalla del navegador.
    // tambien se puede hacer con screen.width y screen.height:
    console.log(screen.width);
    console.log(screen.height);
    //sacar la url actual en la que estamos

    console.log(window.location);
}

//funcion para al momento de llamarla me redirija a otra parte por consola.
function redirect(url){
    window.location.href = url;
}


//Ahora en lugar de redirijir que nos abra una pequeña ventana del navegador

function abrirVentana(url){
    window.open(url, "", "width=400", "height=300");
}

getBom();



