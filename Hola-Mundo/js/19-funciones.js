'use strict'
//Funciones
/*
Es un agrupacion reutilizable de un conjunto de instrucciones
*/

//Ejemplo 1
/*

function calculadora(){
    return "Hola soy la calculadora!!"; sirve para devolver un valor en la funcion
}

console.log (calculadora());

*/

//Ejemplo 2

/*
function calculadora(){
    console.log("Hola soy la calculadora!!");
    console.log("Si soy Yo.")
}

    calculadora();
*/

//PARAMETROS:

/*
function calculadora(num1, num2){
    console.log("Suma:"+(num1+num2));
    console.log("Resta:"+(num1-num2));
    console.log("Multiplicación:"+(num1*num2));
    console.log("División:"+(num1/num2));
    console.log("***************************************************");
}
*/
//invocar o llamar a la calculadora
/*
calculadora(5, 1);
calculadora(15,64);
*/

//Para invocar la calculadora con un bucle for por ejemplo
/*
for(var i=1; i<=10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/

//PARAMETROS OPCIONALES.
/*
function calculadora(num1, num2, mostrar = false){
    if(mostrar == false){
        console.log("Suma:"+(num1+num2));
        console.log("Resta:"+(num1-num2));
        console.log("Multiplicación:"+(num1*num2));
        console.log("División:"+(num1/num2));
        console.log("***************************************************");
    }else{
        document.write("Suma:"+(num1+num2)+"<br/>");
        document.write("Resta:"+(num1-num2)+"<br/>");
        document.write("Multiplicación:"+(num1*num2)+"<br/>");
        document.write("División:"+(num1/num2)+"<br/>");
        document.write("***************************************************"+"<br/>");

    }
    
}

calculadora(1, 4);
calculadora(5, 6, true);
*/

//FUNCIONES DENTRO DE OTRAS

function porConsola(num1, num2){
    console.log("Suma:"+(num1+num2));
    console.log("Resta:"+(num1-num2));
    console.log("Multiplicación:"+(num1*num2));
    console.log("División:"+(num1/num2));
    console.log("***************************************************");
}

function porPantalla(num1, num2){
    document.write("Suma:"+(num1+num2)+"<br/>");
    document.write("Resta:"+(num1-num2)+"<br/>");
    document.write("Multiplicación:"+(num1*num2)+"<br/>");
    document.write("División:"+(num1/num2)+"<br/>");
    document.write("***************************************************"+"<br/>");
}

function calculadora(num1, num2, mostrar=false){
    if(mostrar==false){
        porConsola(num1, num2);
    }else{
        porPantalla(num1, num2);
    }
    return true;
}

calculadora(5, 8);
calculadora(5, 8, true);