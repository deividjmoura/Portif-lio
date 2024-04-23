document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll('.link a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetOffset = targetSection.offsetTop - navbarHeight;
        
        setTimeout(() => {
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
        }, 150); // Adjust the delay (in milliseconds) as needed
      }
    });
  });
});

