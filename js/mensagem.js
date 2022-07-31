$(document).ready(function(){
	
    var TelMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    TelOptions = {
        onKeyPress: function(val, e, field, options) {
        field.mask(TelMaskBehavior.apply({}, arguments), options);
        }
    };
    $('#telefone-mensagem').mask(TelMaskBehavior, TelOptions);

});

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (confirm('Tem certeza que deseja sair?')) {
        deslogarUsuario()
        window.location.replace('./index.html')
    } 
})