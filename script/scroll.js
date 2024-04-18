// scrollEffect.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.page-scroll');

    links.forEach(function(each) {
        each.onclick = scrollAnchors;
    });

    function scrollAnchors(e, respond = null) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }
});

// JavaScript (scroll.js)

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var nav = document.querySelector('nav');
    var current = '';

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    nav.className = ''; // Remove todas as classes da nav
    nav.classList.add(current); // Adiciona a classe correspondente à seção atual
});
