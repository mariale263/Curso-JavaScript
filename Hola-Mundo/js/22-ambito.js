'use strict'

function holaMundo(texto){
    var hola_mundo= "Texto dentro de la funcion";
    
    console.log(texto);
    console.log(numero.toString()); //toString() con esta funcion se puede convertir un numero en un string
    console.log(hola_mundo);
}

var numero = 12;
var texto ="Hola mundo soy una variable global";

//console.log (hola_mundo); esto no se podria hacer ya que no es una variable global

holaMundo();