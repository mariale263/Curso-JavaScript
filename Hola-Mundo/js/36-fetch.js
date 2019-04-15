window.addEventListener('load', ()=>{

'use strict';
/*
Fech (ajax) (sustituto del ajax) y peticiones a servicios / api rest 
Nos permite hacer peticiones ajax mucho mas simple que con js clasico 
o antiguo
Con Json placeholder Es un api rest con datos de prueba. Es un servicio o 
un back end que nos devuelve datos en json

Luego lo hicimos con reqres.in ya que a el formador con json placeholder no le sirvio.
*/

/*
var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];
fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i +'. ' + user.first_name + " " + user.last_name;
        
            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display ="none";
        });
    });
    */

    //PROMESAS Y FETCH

    var div_usuarios = document.querySelector("#usuarios");
    var div_janet = document.querySelector("#janet");
        getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);

            return getJanet();

        })
        .then(data => data.json())
        .then(user =>{
            mostrarJanet(user.data);
        });
    
    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }



    function listadoUsuarios(usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i +'. ' + user.first_name + " " + user.last_name;
        
            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display ="none";
        });
    }
    
    function mostrarJanet(user){
        console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar; 
        avatar.width = '100';
        
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display ="none";
    
    }
        
       








});