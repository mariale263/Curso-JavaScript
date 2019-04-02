'use strict'
//CONDICIONAL IF
//Si A es igual a B entonces haz algo

/*
EJEMPLO 1
var edad1 = 30;
var edad2 =12;

if(edad1>edad2){
    console.log("Edad uno es mayor que edad dos");
}else{
    console.log("La edad uno es inferior");
}

*/

//Operadores relacionales
/*
    MAYOR: >
    MENOR: <
    MAYOR O IGUAL >=
    MENOR O IGUAL <=
    IGUAL: ==
    DISTINTO: !=
*/

//EJEMPLO 2

var edad = 80;
var nombre = "Maria Moreno";

if(edad>=18){
    console.log(nombre + " es mayor de edad, tiene " +edad+" años");
    
    if(edad <= 33){
        console.log('todavia eres milenian');
    }else if(edad>=70){
        console.log('eres mayor');
    }else{
        console.log("ya no eres milenian");
    }
}else{
    console.log(nombre + " es menor de edad");
}

/*OPERADORES LOGICOS: 

AND(Y): &&
OR(O): ||
NEGACION: !
*/ 


var year = 2029

//NEGACION

 /*if (year!=2016){
   console.log("El año no es 2016")
 }*/

 //AND
/*
 if(year>=2000 && year<=2020 && year != 2019){
     console.log("estamos en la era actual");
 }else{
     console.log("estamos en la era post moderna");
 }*/

 //OR

 /*if(year==2009 || year==2019){
     console.log("el año acaba en 9");
 }*/

/*if(year==2009 || (year>=2019 && year == 2029)){
    console.log("el año acaba en 9");
}else{
    console.log("Año no registrado");
}*/

