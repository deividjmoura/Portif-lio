const home = document.getElementById('home');
const about = document.getElementById('about');
const certifications = document.getElementById('certifications');
const contact = document.getElementById('contact');

function h() {
    if(home.style.display === 'none' || contact.style.display === 'block' || certifications.style.display === 'block' || about.style.display === 'block') {
        home.style.display = 'block';
        contact.style.display = 'none' 
        certifications.style.display = 'none'
        about.style.display = 'none'
        } else if (about.style.display === 'block' || contact.style.display === 'none' || certifications.style.display === 'none' || about.style.display === 'none') {
        home.style.display = 'none'
  }
    else {
        home.style.display = 'block'
    }}

function a() {
    if(about.style.display === 'none' || contact.style.display === 'block' || certifications.style.display === 'block' || home.style.display === 'block') {
        about.style.display = 'block';
        contact.style.display = 'none' 
        certifications.style.display = 'none'
        home.style.display = 'none'
        } else if (about.style.display === 'block' || contact.style.display === 'none' || certifications.style.display === 'none' || home.style.display === 'none') {
        about.style.display = 'none'
  }
    else {
        about.style.display = 'block'
    }}

    function c() {
        if(certifications.style.display === 'none' || contact.style.display === 'block' || about.style.display === 'block' || home.style.display === 'block') {
            certifications.style.display = 'block'
            about.style.display = 'none';
            contact.style.display = 'none' 
            home.style.display = 'none'
            } else if (certifications.style.display === 'block' || contact.style.display === 'none' || about.style.display === 'none' || home.style.display === 'none') {
            certifications.style.display = 'none'
      }
        else {
            certifications.style.display = 'block'
        }}

        function ctt() {
            if(contact.style.display === 'none' || certifications.style.display === 'block' || about.style.display === 'block' || home.style.display === 'block') {
                contact.style.display = 'block'
                about.style.display = 'none';
                certifications.style.display = 'none' 
                home.style.display = 'none'
                } else if (contact.style.display === 'block' || certifications.style.display === 'none' || about.style.display === 'none' || home.style.display === 'none') {
                contact.style.display = 'none'
          }
            else {
                contact.style.display = 'block'
            }}