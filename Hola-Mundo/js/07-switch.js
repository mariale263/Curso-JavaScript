'use strict'
 //switch

 var edad=80;
 var imprime="";
    switch(edad){
        case 18:
            imprime="Acabas de cumplir la mayoria de edad";
        break;
        case 25:
            imprime="Ya eres un adulto";
        break;
        case 40:
            imprime="Crisis de los cuarenta";
        break;
        case 75:
            imprime="Eres de la tercera edad";
        break;
        default: //Cuando no se cumple nada de lo anterior
            imprime="Tu edad es neutra";
        break;
    }

    console.log(imprime);
    
