
/******************************** Swiper ******************************/ 

var swiper1 = new Swiper('.swiper1', {
    loop: true,
    allowTouchMove :false,    
    // bouton previous / next 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper2', {
    loop: true,
    autoplay:  {
        delay: 2000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // bouton previous / next 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/******************************** Burger Menu ******************************/ 

var burger = document.querySelector('.burger-menu')
var mynav = document.querySelector('.wrapper-nav');
var lien = mynav.querySelectorAll('.navigation_link')
var croix = mynav.querySelector('close-window')

/* ouvrir la fenêtre */ 

for(i=0; i<lien.length; i++) {
    lien[i].addEventListener('click', hasClick)
    }

burger.addEventListener('click', hasClick)

function hasClick() {
    burger.classList.toggle("active");
    mynav.classList.toggle("active");
}

/* fermer la fenêtre */ 

croix.addEventListener('click', hasClick2)

function hasClick2() {
    burger.classList.remove("active");
    mynav.classList.remove("active");
}