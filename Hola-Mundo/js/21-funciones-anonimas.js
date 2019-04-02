'use strict'
// FUNCIONES ANONIMAS
/**
 * Es una funcion que no tiene nombre
 * 
 */
/*
 var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
 }
 luego en la consola se llama a la funcion asi: 
 pelicula("nombre");
*/

 /**
  * para entenderlo mejos vamos a saber que es un colbak, que simplemente es 
  * una funcion dentro de otra
  * Una funcion de calbak es una funcion anonima que no tiene nombre y quw
  * se le pasa como parametro a otra funcion.
  */

  
  function sumame(num1, num2, sumaYmuestra, sumaPorDos){
      var sumar = num1 + num2;
      
      sumaYmuestra(sumar);
      sumaPorDos(sumar);

      return sumar;
  }
/*
  sumame(5, 7, function(dato){
      console.log("La suma es: ", dato);
  },
  function(dato){
      console.log("La suma por dos es: ", (dato*2));
  });
*/

  //FUNCION DE FLECHA

  //TOMANDO en cuenta el ejemplo anterior vamos a mostrar que es una funcion de flecha:

sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});


  