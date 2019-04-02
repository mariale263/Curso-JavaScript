'use strict'
//Operadores

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert("El resultado de la operacion es: "+operacion);

var operacion = numero1 - numero2;

alert("El resultado de la operacion es: "+operacion);

var operacion = numero1 * numero2;

alert("El resultado de la operacion es: "+operacion);

var operacion = numero1 / numero2;

alert("El resultado de la operacion es: "+operacion);

var operacion = numero1 % numero2;

alert("El resultado de la operacion es: "+operacion);

// TIPOS DE DATOS

// Son el entero, el string o cadena de texto o caracter,  la coma flotante, el boolenao true o falce, array, obejto

var numero_entero = 785;
var cadena_texto = "Hola que tal"; // se puede con comillas simples
var verdadero_o_falso = true; // valor booleano true seria 1 y false el 0



console.log(numero_entero+cadena_texto+verdadero_o_falso);

//funciones Number

var numero_falso = "33";
Number();

console.log(numero_falso+7);//me lo muestra concatenado como texto, numero falso es string pero vamos a comvertirlo a string con la funcion Number()

console.log(Number(numero_falso)+7);// lo convertimos a string flotante o lo que sea

console.log(parseInt(numero_falso)+7); //lo convertimos a numero entero

console.log(parseFloat(numero_falso)+7.5); //lo convertimos a coma flotante o decimal

// Tambien podemos hacer lo contrario tener un numero y convertirlo a un string para no sumar

console.log(String(numero_falso)+4);

//DETECTAR TIPO DE DATOS

console.log(typeof numero_entero);
console.log(typeof numero_falso);
