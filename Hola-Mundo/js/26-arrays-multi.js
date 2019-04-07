'use strict'
//ARRAYS MULTIDIMENSIONALES

/**
 * Son arrays dentro de otros arrays
 */

 var categorias = ['Acción', 'Terror', 'Comedia'];
 var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

 var cine = [categorias, peliculas];

 console.log(cine);
/*
para poder acceder a elemento terror del que a su vez ahora es una categoria, debo poner primero el 
numero de la categoria que en este caso es 0, es decir el valor de categorias dentro del array cine y como segundo elemento la posicion del elemento
que quiero que en este caso sera 1 para la posicion de Terror del array categorias */

console.log(cine[0] [1]);
// y de esa forma lo vere por consola


//COMO AÑADIR UN ELEMENTO AL ARRAY DE PELICULAS
var elemento = "";

/*do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");
*/

/*Formas de eliminar el ultimo elemento ACABAR:
peliculas.pop(); Me elimina el ultimo elemento del array
*/

//console.log(peliculas);

//PARA ELIMINAR UN ELEMENTO DEL ARRAY TENDRIA QUE HACER:

var indice = peliculas.indexOf("Gran torino"); //primero se debe hacer una busqueda para saber la posicion donde esta el elemento que queremos

if(indice > -1){//-1 significa q no lo he encontrado
    peliculas.splice(indice);//El metodo splice nos permite en base a un indice borrar tantos pasos como yo quiera en adelante es decir cuantos indices quiero borrar
}
console.log(peliculas);

//CONVERTIR UN ARRAY A TEXTO


var peliculas_string= peliculas.join(); //con join convierto el array en un string separados por comas en el array
console.log(peliculas_string);

//CONVERTIR UNA CADENA A UN ARRAY

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

//ORDENAR ARREGLOS

//Se hace con el metodo sort()

peliculas.sort();//Ordena el array por orden alfabetico

peliculas.reverse();//Para ordenarlos alreves, dandole la vuelta y q tenga el orden inverso.

