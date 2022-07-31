const formLogin = document.querySelector("#formularioLogin");
const username = document.querySelector('#email');
const password = document.querySelector('#senha');

window.onload = function () {
    if(estaLogado()){       
        window.location.replace('./home.html');
    }
}

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!checarUsuario()){
        alert("Usuário não cadastrado ou senha incorreta.")
        return false;
    }

    formLogin.submit()
})