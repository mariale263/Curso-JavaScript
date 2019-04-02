'use strict'
//pruebas con let y varr

//prueba con var

var numero =40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//prueba con let

var texto ="Curso JS Maria"

console.log(texto); //valor lo anterior

if (true){
    let texto="Curso de ingles";
    console.log(texto); //valor curso de ingles
}

console.log(texto); //valor js
