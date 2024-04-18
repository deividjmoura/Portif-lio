$(document).ready(function() {
    // Função para abrir o modal quando o link "About" for clicado
    $('#about').click(function(){
        $('#modal-overlay').fadeIn(); // Exibe o overlay do modal
        $('#modal-content').fadeIn().css({
            'top': '50%', // Posiciona o modal verticalmente no centro
            'left': '50%', // Posiciona o modal horizontalmente no centro
            'transform': 'translate(-50%, -50%)', // Centraliza o modal
            'max-width': '50%' // Define a largura máxima do modal
        });
        $('body').addClass('modal-active'); // Adiciona uma classe ao corpo para evitar rolagem da página de fundo
    });
    
    // Função para fechar o modal quando o overlay ou o botão de fechar forem clicados
    $('#modal-overlay, #modal-close').click(function(){
        $('#modal-overlay').fadeOut(); // Oculta o overlay do modal
        $('#modal-content').fadeOut(); // Oculta o conteúdo do modal
        $('body').removeClass('modal-active'); // Remove a classe do corpo para permitir a rolagem da página de fundo
    });
});
