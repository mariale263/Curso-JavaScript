'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de javascript";
var texto2 = "Es un buen curso";
/*
//Vamos a ver como transformar el numero a un string, pues utilizando el metodo toString()

var dato = numero.toString();
    dato = texto1.toUpperCase(); // Para comvertir el dato a mayusculas
    //para convertirlo en minuscular seria entonces:
    //dato = texto2.toLowerCase();

console.log (dato);

console.log (typeof dato); // Con typeof veremos que tipo de dato es, q en este caso es un string

// Calcular longitud del texto

var nombre = "Maria Moreno";
    nombre = ["hola", "hola1"];
console.log(nombre.length);

//Concatenar - unir textos

    //Primera forma:

    var textoTotal = texto1 +" "+ texto2;

    console.log(textoTotal);

    //segunda forma

    var textoTotal1 = texto1.concat(" " + texto2);
    console.log(textoTotal1);

*/

//Metodos y propiedades para hacer busquedas dentro de un string

//var busqueda = texto1.indexOf("curso"); //indexOf lo que hace es encontrar la primera coincidencia
//console.log(busqueda);

    //Tambien tenemos otros metodos:
    //Metodo de arriba el indexOf()
    //Metodo lastIndexOf(): que nos permite sacar la ultima coincidencia de la palabra buscada
    //Metodo search(): var busqueda = texto1.search("curso");
    //Metodo match(); devuelve un array con las palabras y tambien se pude poner de la siguiente forma:
    //var busqueda = texto1.match(/curso/g); Esto sirve para que le busque mas coincidencias; en cambio con 
    //var busqueda = texto1.match("curso"); Solo buscaria una sola conincidencia.
    //Metodo substr(): Es otro metodo para buscar un trozo de una busqueda o un trozo de un string
        //var busqueda = texto1.substr(12,15);
        // console.log(busqueda);
    //Metodo charAt: sirve para buscar una letra en concreto
        // var busqueda = texto1.charAt(4);
        //console.log(busqueda);
    //Metodo starsWith(): con este metodo puedo buscar un texto y decirme true o false dependiendo si lo encuentra o no.
        //var busqueda = texto1.startsWith("Bienvenido");
        //console.log(busqueda);
    //Metodo includes(): lo que hace es buscar una palabra y dice true o fase
        //var busqueda = texto1.includes("Bienvenido");
        //console.log(busqueda);

//FUNCIONES DE REEMPLAZO

    //1. Funcion replace():
        //var busqueda = texto1.replace("javascript", "php");
        //console.log(busqueda);
    //2. Funcion slice: nos permite separar un string a partir del caracter que uno quiera
        //var busqueda = texto1.slice("14"); y tambin lo puede hacer asi (14,22) desde hasta.
        //console.log(busqueda);
    //3. Funcion split: me mete todo dentro de un array y lo puedo separar por espacios tambien  dejando un espacio dentro del parentesis
        //var busqueda = texto1.split(" "); //y tambin lo puede hacer asi (14,22) desde hasta.
        //console.log(busqueda);
    //4. Funcion o metodo trim(): me recorta los espacios por delante y por detras que tiene las cadenas y sirve para los usarios y contraseñass
        //var busqueda = texto1.trim();
        //console log(busqueda);

    



