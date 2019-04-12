'use strict'

window.addEventListener('load', ()=>{
    //Timers

    //setInterfal: Nos permite un trozo de codigo cada x segundos
    /*var tiempo = setInterval(function(){
        console.log("set interval ejecutado");
        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        }   
        
    }, 5000);
    */

    //setTimeout: Solo se ejecuta una sola vez. 
    /*var tiempo = setTimeout(function(){
        console.log("set interval ejecutado");
        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        }   
        
    }, 5000);
    */

    //Tambien podemos poner un boton en el html con id stop y otro con id inicio

    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("set interval ejecutado");
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }   
            
        }, 1000);

        return tiempo;
    }
    
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);//es importante pasarle la variable asignada que en este caso es tiempo
    });

    var iniciar = document.querySelector("#inicio");
    iniciar.addEventListener("click", function(){
        alert("Has inicializado el intervalo en bucle");
        intervalo();
    });

});