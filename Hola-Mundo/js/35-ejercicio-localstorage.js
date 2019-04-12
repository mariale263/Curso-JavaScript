'use strict'


    /*
    formulario que nos permita añadir peliculas
    */
    var formulario = document.querySelector('#formpeliculas');
    
    formulario.addEventListener('submit', function(){
        
        var titulo = document.querySelector('#addpelicula').value;
        
        if(titulo.lengh >= 1){//para que no me lo agregue vacio
            localStorage.setItem(titulo, titulo);
        }        
    });
    
/*
    var ul = document.querySelector('#peliculas-list');
    
    for (var i in localStorage) {
        
        if(typeof localStorage[i] == 'string'){
            console.log(localStorage[i]);
            var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
        }      

    }*/

