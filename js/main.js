const usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || []
const usuarioDados = JSON.parse(localStorage.getItem('usuarioDados')) || []
const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || []
const menuMensagem = document.querySelector('#menuMensagem')
const fotosUsuario = document.querySelectorAll('.fotos-usuario')
const logoutBtn = document.querySelector('.logout')

function cadastrarUsuario() {
    localStorage.setItem("usuariosCadastrados", JSON.stringify(usuariosCadastrados))
}

function cadastrarDadosUsuario(dados) {
    localStorage.setItem("usuarioDados", JSON.stringify(dados))
}

function gravarUsuarioLogado() {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado))
}

function deslogarUsuario() {
    localStorage.removeItem('usuarioLogado')
}

function limpaCampos() {
    nome.value = ''
    username.value = ''
    password.value = ''
    passwordConfirm.value = ''
}

function checarSenhaIgual() {
    if (password.value === passwordConfirm.value) {
        return true;
    } else {
        alert("Senhas não são iguais");
    }
}

function checarUsuario() {
    for (i=0; i < usuariosCadastrados.length; i++) {
        console.log(usuariosCadastrados[i])
        if (usuariosCadastrados.find( elemento => elemento.usuario == username.value) && usuariosCadastrados.find( elemento => elemento.senha == password.value)) {
            logarUsuario()
            return true;
        }
    }
    
    return false;
}

function logarUsuario() {
    const usuarioLogar = {
        "usuario" : username.value,
        "senha" : password.value
    }

    usuarioLogado.push(usuarioLogar);

    gravarUsuarioLogado()
}

function estaLogado() {
    if (usuarioLogado.length > 0){
        return true
    } else {
        trocaEnderecoMenu()
        return false
    }
   
}

function jaCadastrado() {

    for (i=0; i < usuariosCadastrados.length; i++) {
        console.log(usuariosCadastrados[i])
        if (usuariosCadastrados.find( elemento => elemento.usuario == username.value)) {
            return false;
        }
    }

    return true;
}

function trocaEnderecoMenu() {
    menuMensagem.parentNode.setAttribute('href', 'login.html')
}

window.onload = function () {
    for (i=0; i < usuarioDados.length; i++){
        if (usuarioLogado[0].usuario == usuarioDados[i].usuario){
            fotosUsuario.forEach(el => el.src = usuarioDados[i].fotoUsuario)
        } 
    }
}

