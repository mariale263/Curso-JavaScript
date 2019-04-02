'use strict'
/*
hacer la tabla de multiplicar de un numero introducido por pantalla
*/

var number = parseInt(prompt('introduce un numero', 1));

document.write("<h1>Tabla del "+number+" </h1>");
for( var i = 1; i<=10; i++){
    document.write(i+ " x "+number+" = "+(i*number)+"<br />");
}

//Todas las tablas

for(var c =1; c<=10; c++){
    document.write("<h1>Tabla del "+c+" </h1>");
    for( var i = 1; i<=10; i++){
    document.write(i+ " x "+c+" = "+(i*c)+"<br />");
    }

}
