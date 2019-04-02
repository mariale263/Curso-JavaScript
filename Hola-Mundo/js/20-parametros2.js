'use strict'
//PARAMETROS REST Y SPREAD

/*

function listadoFrutas(fruta1, fruta2){
    console.log("fruta1: ", fruta1);
    console.log("fruta2: ", fruta2);
}


listadoFrutas("Naranja", "Manzana");
*/


// En el anterior ejemplo no pasa ningun problema, pero si queremos pasarle mas parametros no definidos:

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){ //la solucion es poner 3 puntos delante para guardarlos como un array
    console.log("fruta1: ", fruta1);
    console.log("fruta2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "sandia", "platano");

//SPREAD:

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "sandia", "platano");