const principal = document.querySelector('.principal-index')
const botoes = document.querySelectorAll(".btn-home")

window.onload = function () {

    if(estaLogado()){       
        removeBotoes()
        adicionaBotaoLogado()
    }
}

function removeBotoes() {
    botoes.forEach(el => el.remove());
}

function adicionaBotaoLogado() {
    const novoBotao = document.createElement("a")
    novoBotao.setAttribute('href', "home.html");
    novoBotao.classList.add('btn-home')
    novoBotao.innerText = 'Ver pets'

    principal.appendChild(novoBotao)
}