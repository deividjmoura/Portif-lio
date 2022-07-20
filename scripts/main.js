const init = document.getElementById('init');
// const home = document.getElementById('home');
const about = document.getElementById('about');
const certifications = document.getElementById('certifications');
const contact = document.getElementById('contact');

/*
function h() {
    if(home.style.display === 'none' || init.style.display === 'block' || contact.style.display === 'block' || certifications.style.display === 'block' || about.style.display === 'block') {
        home.style.display = 'block';
        init.style.display = 'none'
        contact.style.display = 'none' 
        certifications.style.display = 'none'
        about.style.display = 'none'
        } else if (init.style.display === 'none' || about.style.display === 'block' || contact.style.display === 'none' || certifications.style.display === 'none' || about.style.display === 'none') {
        home.style.display = 'none'
        init.style.display = 'block' 
  }
    else {
        home.style.display = 'block'
        init.style.display = 'none'
    }}
*/

function a() {
    if(about.style.display === 'none' || init.style.display === 'block' || contact.style.display === 'block' || certifications.style.display === 'block') {
        about.style.display = 'block';
        init.style.display = 'none'
        contact.style.display = 'none' 
        certifications.style.display = 'none'
        } else if (init.style.display === 'none' || about.style.display === 'block' || contact.style.display === 'none' || certifications.style.display === 'none') {
        about.style.display = 'none'
        init.style.display = 'block' 
  }
    else {
        about.style.display = 'block'
        init.style.display = 'none'
    }}

function c() {
    if(certifications.style.display === 'none' || init.style.display === 'block' || contact.style.display === 'block' || about.style.display === 'block') {
        certifications.style.display = 'block'
        init.style.display = 'none'
        about.style.display = 'none';
        contact.style.display = 'none' 
        } else if (init.style.display === 'none' || certifications.style.display === 'block' || contact.style.display === 'none' || about.style.display === 'none') {
        certifications.style.display = 'none'
        init.style.display = 'block' 
  }
    else {
            certifications.style.display = 'block'
            init.style.display = 'none'
    }}

function ctt() {
    if(contact.style.display === 'none' || init.style.display === 'block' || certifications.style.display === 'block' || about.style.display === 'block') {
        contact.style.display = 'block'
        init.style.display = 'none'
        about.style.display = 'none';
        certifications.style.display = 'none' 
        } else if (init.style.display === 'none' || contact.style.display === 'block' || certifications.style.display === 'none' || about.style.display === 'none') {
        contact.style.display = 'none'
        init.style.display = 'block' 
        }
    else {
        contact.style.display = 'block'
        init.style.display = 'none'
    }}

