window.addEventListener('load', ()=>{

    'use strict';


    getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
            })

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function listadoUsuarios(usuarios){

        console.log('hola', usuarios);
        let tabla = document.getElementById('usuarios');

        for(let valor of usuarios){
            console.log(valor);
            tabla.innerHTML +=`

            <tr>
                <td>${ valor.id }</td>
                <td>${ valor.first_name }</td>
                <td>${ valor.last_name }</td>
            </tr>
            `
        }

        document.querySelector(".loading").style.display ="none";
        //});
    }
});