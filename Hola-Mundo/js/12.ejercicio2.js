'use strict'
/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahy mostrar el resultado
*/
var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('introducir un numero hasta que metas uno negativo', 0));

    if (isNaN(numero)){
        numero = 0;
    }else if(numero>=0){
        suma = suma + numero;
        //suma +=numero; es lo mismo de arriba

        contador++;
    }

    console.log(suma);
    console.log(contador);

}while(numero>=0)

alert("La suma de todos los numero es: "+ suma);
alert("La media de todos los numero es: "+ (suma/contador));

