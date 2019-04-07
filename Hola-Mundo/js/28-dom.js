'use strict'
/*
DOM - Document Object Model
*/
function cambiaColor(color){
    caja.style.background = color;
}

//conseguir elementos con un ID en concreto.

//var caja = document.getElementById("micaja");
//console.log(caja);

//con .innerHTML se puede capturar el texto del codigo html que hay alli
//var caja = document.getElementById("micaja").innerHTML;
//console.log(caja);
 //Para cambiar el texto del html
 //var caja = document.getElementById("micaja");
 /*
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
 //caja.class = "hola";//añadir una clase o atributo
 caja.className = "hola hola2";//modificar una clase



 // conseguir elementos por su etiqueta

    var todosLosDivs = document.getElementsByTagName('div');
    
    var seccion = document.querySelector("#miseccion");
    var hr = document.createElement("hr");
    
    

//modificar unos de esos elementos:

//var contenidoEnTexto = todosLosDivs[2].textContent;//textcontent par sacar el texto que hay
//console.log(contenidoEnTexto);

//o

//var contenidoEnTexto = todosLosDivs[2];


//es lo mismo lo que pasa es que innerHTML me permite asignarle un valor nuevo a ese contenido.

//contenidoEnTexto.innerHTML = "otro valor";
//contenidoEnTexto.style.background = "red";


var valor;
for (valor in todosLosDivs) {
   if (typeof todosLosDivs[valor].textContent == 'string') {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    document.querySelector("#miseccion").append(parrafo);
    }
}
seccion.append(hr);
    //append añade despues y preppend añade antes 
    


 // conseguir elementos por su clase css