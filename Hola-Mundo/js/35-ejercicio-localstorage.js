'use strict'


    /*
    formulario que nos permita añadir peliculas
    */
    
      
   var formulario = document.querySelector("#formpeliculas");

   
        formulario.addEventListener('submit', function(){
        
        var titulo = document.querySelector('#addpelicula').value;
        
        //para que no me lo agregue vacio hago la decision
        if(titulo.length >= 1 ){  
            localStorage.setItem(titulo, titulo);
        }      
    });
    

    var ul = document.querySelector('#peliculas-list');
    
    for (var i in localStorage) {
        
        if(typeof localStorage[i] == 'string'){
            console.log(localStorage[i]);
            var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
        }      

    }

    //Borrar peliculas del formulario
    var formulariob = document.querySelector("#formBorrarPeliculas");

   
    formulariob.addEventListener('submit', function(){
    
    var titulo = document.querySelector('#borrarPelicula').value;
    
    //para que no me lo agregue vacio hago la decision
    if(titulo.length >= 1 ){  
        localStorage.removeItem(titulo, titulo);
    }      
});



