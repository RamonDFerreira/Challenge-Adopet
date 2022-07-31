const nome = document.querySelector('#nome-perfil')
const telefone = document.querySelector('#telefone-perfil')
const cidade = document.querySelector('#cidade-perfil')
const sobre = document.querySelector('#sobre-perfil')
const formPerfil = document.querySelector('#formulario-perfil')
const fotoPerfil = document.querySelector('#foto')
const inputFoto = document.querySelector('#inputFoto')


$(document).ready(function(){
	
    var TelMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    TelOptions = {
        onKeyPress: function(val, e, field, options) {
        field.mask(TelMaskBehavior.apply({}, arguments), options);
        }
    };
    $('#telefone-perfil').mask(TelMaskBehavior, TelOptions);

    $('input[type=file]').on('change', function () {
        var $files = $(this).get(0).files;
    
        if ($files.length) {
          // Reject big files
          if ($files[0].size > $(this).data('max-size') * 1024) {
            console.log('Please select a smaller file');
            return false;
          }
    
          // Begin file upload
          console.log('Uploading file to Imgur..');
    
          // Replace ctrlq with your own API key
          var apiUrl = 'https://api.imgur.com/3/image';
          var apiKey = '4669b1380c0f286';
    
          var settings = {
            async: false,
            crossDomain: true,
            processData: false,
            contentType: false,
            type: 'POST',
            url: apiUrl,
            headers: {
              Authorization: 'Client-ID ' + apiKey,
              Accept: 'application/json',
            },
            mimeType: 'multipart/form-data',
          };
    
          var formData = new FormData();
          formData.append('image', $files[0]);
          console.log(settings);
          settings.data = formData;
    
          // Response contains stringified JSON
          // Image URL available at response.data.link
          $.ajax(settings).done(function (response) {
            fotosUsuario.forEach(el => el.setAttribute('src', JSON.parse(response).data.link));        
          });

        }
      });
});

window.onload = function () {
    for (i=0; i < usuarioDados.length; i++){
        if (usuarioLogado[0].usuario == usuarioDados[i].usuario){
            fotosUsuario.forEach(el => el.src = usuarioDados[i].fotoUsuario)
            nome.value = usuarioDados[i].nomeUsuario
            telefone.value = usuarioDados[i].telefone
            cidade.value = usuarioDados[i].cidade
            sobre.value = usuarioDados[i].sobre
        } 
    }
}

function alteraDados() {
    const dadosAlterados = {
        "usuario" : usuarioLogado.find(elemento => elemento).usuario,
        "fotoUsuario" : fotoPerfil.src,
        "nomeUsuario" : nome.value,
        "telefone" : telefone.value,
        "cidade" : cidade.value,
        "sobre" : sobre.value
    }

    usuarioDados.splice(usuarioDados.find(elemento => elemento.usuario === usuarioLogado.usuario), 1)
    usuarioDados.push(dadosAlterados)

    cadastrarDadosUsuario(usuarioDados)
}

formPerfil.addEventListener('submit', (e) => {
    e.preventDefault()

    alteraDados()

    formPerfil.submit()
})

fotoPerfil.addEventListener('click', (e) => {
    inputFoto.click()
})

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (confirm('Tem certeza que deseja sair?')) {
        deslogarUsuario()
        window.location.replace('./index.html')
    } 
})