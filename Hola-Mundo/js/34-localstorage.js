'use strict'

window.addEventListener('load', ()=>{
    /*
    localStorage o html5 webStorage: podemos guardar informacion web a modo de sesion
    y que esta persista y este disponible durante la navegacion de nuestras 
    paginas web o aplicaciones web. 
    Es una memoria que vamos a tener guardada.
    */

    //Comprobar si el LocalStorage existe, disponibilidad
    if(typeof(Storage) !== 'undefined'){
        console.log("LocalStorage disponible");
    }else{
        console.log("Incompatible con LocalStorage, no disponible");
    }

    //Guardar datos en el LocalStorage

    localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

    //Recuperar elemento y meterlo en la web

    document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");
    
    //Guardar objetos

    var usuario = {
        nombre: "Maria Moreno",
        email: "mariale.contreras@gmail.com",
        web: "Cambiandohabitosconmariale.wordpress.com"
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    //Tanto en el LocalStorage como para enviar informacion por
    //POST o para enviar informacion a una api suele ser necesario convertirlos en un string
    // por que esa es la manera. Y por eso tenemos que convertir lo anterior a un ojeto de json a un string


    //Recuperar objeto y no sabes como ya que es un Json string:
    
    var userjs = JSON.parse(localStorage.getItem("usuario"));
    console.log(userjs);

    //document.querySelector("#peliculas").append(" web: "+userjs.web);

    document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre); //he pintado otro div para poner esta informacion y asi yo borre del local Storage la informacion en la consola esta volvera a salir

    //se puede borrar esos elementos usando:

    localStorage.removeItem("usuario");
    //o 
    localStorage.clear();//me vacia todo el localStorage



});