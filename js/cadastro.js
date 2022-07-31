const formCadastro = document.querySelector("#formularioCadastro");
const nome = document.querySelector('#nome')
const username = document.querySelector('#email');
const password = document.querySelector('#senha');
const passwordConfirm = document.querySelector('#confirmaSenha');

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault()


    if(!checarSenhaIgual()){
        return false;
    }

    var usuarioCadastrar = {
        "usuario" : username.value,
        "senha" : password.value
    }

    var usuarioDadosCadastrar = {
        "usuario" : username.value,
        "fotoUsuario" : './img/Usuário.png',
        "nomeUsuario" : nome.value,
        "telefone" : '',
        "cidade" : '',
        "sobre" : ''
    }

    if (jaCadastrado()) {
        usuariosCadastrados.push(usuarioCadastrar)
        usuarioDados.push(usuarioDadosCadastrar)
        cadastrarUsuario()
        cadastrarDadosUsuario(usuarioDados)
        alert("Usuário cadastrado com sucesso!")
        formCadastro.submit()
        limpaCampos()
    } else {
        alert("Usuário já cadastrado")
        limpaCampos()
    }

})

