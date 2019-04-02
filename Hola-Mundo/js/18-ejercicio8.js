'use strict'

/*
Hacer una calculadora:
- Pida dos numeros por pantalla
- Que si metemos uno mal que nos lo vuelva a pedir
- En el cuerpo de la pagina en el body una alerta y la 
consola el resultado de sumar, restar, multiplicar esas dos cifras
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while(numero1 < 0 || numero2 <0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}

var resultado = "La suma es: " +(numero1+numero2)+" <br />"+
                "La resta es: " +(numero1-numero2)+" <br />"+
                "La Multiplicacion es: "+(numero1*numero2)+ "<br />"+
                "La división es: "+(numero1/numero2)+ "<br />";

var resultadoCMD = "La suma es: " +(numero1+numero2)+" \n"+
            "La resta es: " +(numero1-numero2)+" \n"+
            "La Multiplicacion es: "+(numero1*numero2)+ "\n"+
            "La división es: "+(numero1/numero2)+ "\n";

document.write(resultado);

alert("El resultado es: "+resultadoCMD+"");

console.log(resultadoCMD);