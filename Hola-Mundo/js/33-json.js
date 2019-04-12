'use strict'

window.addEventListener('load', ()=>{
        /*
    JSON JavaScript Object Notation/Notacion de Objetos de JavaScript: nos permite hacer una especie de array asociativo
    */
    //De esta forma se define un objeto JSON
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'Estados Unidos'
    }


    //si le queremos cambiar el nombre simplemente hacemos los siguiente:
    pelicula.titulo = "spyderman";

    //como se accede a las propiedades del objeto JSON:

    console.log(pelicula);

    //en la consola para acceder a una de sus propiedades se pone el objeto y luego un punto y seguido la propiedad
    //pelicula.pais por ejemplo y alli le aparece

    console.log(pelicula.titulo);

    //tambien podria tener un array de peliculas
    var peliculas = [
        {titulo: "la verdad duele", year: 2016, pais: "francia"}, pelicula
    ];


    //recorrer peliculas
    var caja_peliculas = document.querySelector("#peliculas");
    var index;

    for (index in peliculas) {
        var p = document.createElement("p");
        p.append(peliculas[index].titulo+" "+peliculas[index].year+" "+peliculas[index].pais);
        caja_peliculas.append(p);
    }


    //localstorage: es una manera de almacenar informacion dentro del navegador y que  persista mientras voy navegando en la pagina

    

});





