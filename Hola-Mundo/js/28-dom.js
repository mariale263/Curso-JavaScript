'use strict'
/*
DOM - Document Object Model
*/
function cambiaColor(color){
    caja.style.background = color;
}


var caja = document.getElementById("micaja");
console.log(caja);

//con .innerHTML se puede capturar el texto del codigo html que hay alli
var caja = document.getElementById("micaja").innerHTML;
console.log(caja);
 //Para cambiar el texto del html
/* var caja = document.getElementById("micaja");
 caja.innerHTML = "Texto en la caja desde JS";
 caja.style.background = "red";
 caja.style.padding = "15px";
 caja.style.color = "white";
 caja.class = "hola";//añadir una clase o atributo
 caja.className = "hola hola2";//modificar una clase

 console.log(caja);
 */

 //otra forma de seleccionar un elemento es con el query selector
var caja = document.querySelector("#micaja");

 caja.innerHTML = "Texto en la caja desde JS";
 caja.style.background = "red";
 caja.style.padding = "15px";
 caja.style.color = "white";
 caja.class = "hola";//añadir una clase o atributo
 caja.className = "hola hola2";//modificar una clase

 console.log(caja);
 