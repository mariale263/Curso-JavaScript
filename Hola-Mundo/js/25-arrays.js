'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Maria Moreno";
var nombres = ["Maria Moreno", "Daniel Escobar", "Diego Escobar", 52, true];//SE PUEDE  definir con corchetes

var lenguajes = new Array ("PHP", "JS", "JAVA");//O se puede definir el array con parentesis en forma de objeto

console.log(nombres);
console.log(lenguajes);

//para acceder por ejemplo a la posicion numero 2 del array se hace asi:

console.log(lenguajes[2]);

//Cuantos elementos tiene un array

console.log(lenguajes.length);

//poniendo el numero del indice sacar su valor

//var elemento= parseInt (prompt("Que elemento del array quieres??", 0));

/*if (elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: " + nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}*/

//mostrar todos los elementos de un array por pantalla

document.write("<h1>Lenguajes de programación de 2018</h1>");

//CON EL BUCLE FOR
document.write("<ul>");
/*for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>");
}*/

//CON EL FORECH
     lenguajes.forEach((elemnto, indice, data)=>{//Dentro del parentesis puede tener el elemento, el indice del elemento y el array
        console.log(data);//Este parametro el de data contiene el array original q le estamos pasando de la variable original, pero no hace falta 
        document.write("<li>"+indice+" - "+elemnto+"</li>");
    })
document.write("</ul>");

//CON EL FOR IN
document.write("<ul>");
for (const lenguaje in lenguajes) {
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
    }
document.write("</ul>")

//BUSQUEDAS EN UN ARRAY

var busqueda =lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});
 console.log(busqueda);

    //podemos reducir este codigo de la siguiente manera:
    var busqueda =lenguajes.find(lenguaje => lenguaje == "PHP");
     console.log(busqueda);

     //Con el metodo findIndex: podemos buscar en que indice se encuentra el elemento
    var busqueda =lenguajes.findIndex(lenguaje => lenguaje == "PHP");
    console.log(busqueda);

    //Metodo some: para encontrar si hay valores de un tipo u otro dentro de un array haciendo un filtro para ver si existes valores mayores o menores iguales a un valor q yo quiera buscar
    
    var precios = [10, 20, 50, 80, 12];
    
    var busqueda =precios.some(precio => precio >= 80);
    console.log(busqueda);



 