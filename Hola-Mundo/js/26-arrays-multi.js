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

do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

console.log(peliculas);
