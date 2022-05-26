
const jokeUrl = 'https://reqres.in/api/users';
fetch( jokeUrl ).then( resp =>{
   // resp.json().then( data =>{
   //     for(let i = 0; i < data.data.length; i++){
   //         console.log(data.data[i].id, data.data[i].email);
   //     }
   // });
    resp.json().then( data =>{
        let div_usuarios = document.querySelector("#usuarios");
        for(let i = 0; i < data.data.length; i++){
            console.log(data.data[i].id, data.data[i].email);

            let id = document.createElement('h3');
            let email = document.createElement('h4');

            id.innerHTML = data.data[i].id;
            email.innerHTML = data.data[i].email;

            div_usuarios.appendChild(id);
            div_usuarios.appendChild(email);

            document.querySelector(".loading").style.display ="none";
        }
    });
});