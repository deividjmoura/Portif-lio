$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    setTimeout(function() {
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 5000, 'easeInOutExpo'); // Alterei o tempo de animação para 5000ms (5 segundos)
    }, 500); // Delay de 500ms antes de iniciar o scroll
    event.preventDefault();
});
