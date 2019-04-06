'use strict'

//Plantillas de texto

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h4>Mis apellidos son: ${apellidos}</h4>
`;

document.write(texto);

//se imprime las variables dentro del codigo 

     