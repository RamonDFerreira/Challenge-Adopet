logoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (confirm('Tem certeza que deseja sair?')) {
        deslogarUsuario()
        window.location.replace('./index.html')
    } 
})