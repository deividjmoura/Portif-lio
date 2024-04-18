$(document).ready(function() {
    // Função para abrir o modal
    $('.button').click(function(){
        $('#modal-overlay').fadeIn();
        $('#modal-content').fadeIn().css({
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)',
            'max-width': '50%'
        });
        $('body').addClass('modal-active');
    });
    
    
    // Função para fechar o modal
    $('#modal-overlay, #modal-close').click(function(){
        $('#modal-overlay').fadeOut();
        $('#modal-content').fadeOut();
        $('body').removeClass('modal-active');
    });
});
