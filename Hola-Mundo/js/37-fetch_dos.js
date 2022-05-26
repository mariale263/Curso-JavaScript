window.addEventListener('load', ()=>{

    'use strict';
    //PROMESAS Y FETCH
    let div_usuarios = document.querySelector("#usuarios");
    let div_janet = document.querySelector("#janet");

    const peticion = fetch('https://reqres.in/api/users');
    const janet = fetch('https://reqres.in/api/users/2');
    peticion
        .then(data => data.json())
        .then (users => listadoUsuarios(users.data));
    janet
        .then(data => data.json())
        .then(user => mostrarJanet(user.data));

    function listadoUsuarios(usuarios){
        // usuarios.map((user, i) => {
        //     let nombre = document.createElement('h3');
        //     nombre.innerHTML = i +'. ' + user.first_name + " " + user.last_name;
        //
        //     div_usuarios.appendChild(nombre);
        //
        //     document.querySelector(".loading").style.display ="none";
        // });

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