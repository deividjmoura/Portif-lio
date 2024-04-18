$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        setTimeout(function() {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 10500, 'easeInOutExpo');
        }, 500); // Delay de 500ms antes de iniciar o scroll
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
});
