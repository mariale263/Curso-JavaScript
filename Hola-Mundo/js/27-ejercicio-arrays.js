'use strict'
/*
Programa que:
1. pida 6 numeros por pantalla y lo meta en un array
2. tiene que mostrar el array entero todos sus elementos en el cuerpo de la pagina y en la consola
3. tambien sacar el array ordenado y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. hacer una busqueda de un valor introducido por el usuario y que nos dia
    si esta en el array y que nos diga su indice.
*/

//3.Mostrar el array
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}
//hay varias formas de hacerlo:
//1
/*var numeros = new Array(6);

for (var i = 0; i <= 5; i++) {
    numeros[i]= parseInt( prompt("Ingrese el numero de array ", 0));
}

console.log(numeros);
*/

//2. pedir los 6 numeros

//1. p
var numeros = [];

for (var i = 0; i <= 5; i++) {
    numeros.push( parseInt (prompt("Ingrese el numero de array", 0)));
}

//Mostrar en el cuerpo de la pagina

//mostrarArray(numeros);
/*document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>"+numero+"</strong></br>");
});*/


console.log(numeros);//2. lo muestra por la consola

//3. Ordernarlo y mostrarlo

numeros.sort();
mostrarArray(numeros, "ordenado");//Este segundo parametros es el testo custom

//para ordenarlo de forma numerica y no alfabetica hacemos lo siguiente
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, "ordenado");//Este segundo parametros es el testo custom

//4. invertir su orden y mostrarlo.

numeros.reverse();

mostrarArray(numeros, "invertido");

//5. cuantos elementos tiene un array

document.write("El array tiene: "+numeros.length+" elementos.");

//6. hacer una busqueda de un valor introducido por el usuario y que nos diga
// si esta en el array y que nos diga su indice.

var busqueda = parseInt (prompt("busca un numero de array", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1){
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>No encontrado</h1>")
}



