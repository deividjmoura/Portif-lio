const init = document.getElementById('init');
// const home = document.getElementById('home');
const about = document.getElementById('about');
const certifications = document.getElementById('certifications');
const contact = document.getElementById('contact');

const textDisplay = document.querySelector("#msg");
const phrases = ["Welcome!"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false

   let speadUp = Math.random() * (300 - 50) + 80;
   let normalSpeed = Math.random() * (300 - 300) + 200;
   let speed = isEnd ? 1000 : isDeleting ? speadUp : normalSpeed;



function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");
  
  if(i < phrases.length) {
    
    if(!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++
    }
    
    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--
    }
    
    if(j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }
    
    if(isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++
      if (i == phrases.length) {
        i = 0;
      }
    }
     
    let speed = isEnd ? 20 : isDeleting ? speadUp : normalSpeed;
  }
  setTimeout(loop, speed);
}

loop();

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

// night mode

// pegamos o valor no localStorage
const nightMode = document.querySelector('#night-mode')

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode')
})