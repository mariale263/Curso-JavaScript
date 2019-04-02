'use strict'
/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales acero, nos los vuelva a pedir
*/

/*
var numero1 = parseInt (prompt('Introduce el primer numero ', 0));
var numero2 = parseInt (prompt('Introduce el segundo numero ', 0));

if(numero1 == numero2){
    alert('Ambos numeros son iguales'); 

}else if(numero1 > numero2){
    alert(numero1+' Es mayor');
    alert('El numero menor es:' + numero2);

}else if(numero1 < numero2){
    alert('El numero mayor es: '+numero2);
    alert('El numero menor es: '+numero1);

}else{
    alert('Introduce numeros correctos');
}
*/

//PLUS

var numero1 = parseInt (prompt('Introduce el primer numero ', 0));
var numero2 = parseInt (prompt('Introduce el segundo numero ', 0));

while(numero1 <=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){//isNaN si no son numeros
    numero1 = parseInt (prompt('Introduce el primer numero ', 0));
    numero2 = parseInt (prompt('Introduce el segundo numero ', 0));
}

if(numero1 == numero2){
    alert('Ambos numeros son iguales'); 

}else if(numero1 > numero2){
    alert(numero1+' Es mayor');
    alert('El numero menor es:' + numero2);

}else if(numero1 < numero2){
    alert('El numero mayor es: '+numero2);
    alert('El numero menor es: '+numero1);

}else{
    alert('Introduce numeros correctos');
}

