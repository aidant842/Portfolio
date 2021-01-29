/* Cards JavaScript */

const cardFade = () => {
    const cards = document.querySelectorAll('.card');
    const cardOverlay = document.querySelectorAll('.card-img-overlay');
    const cardText = document.querySelectorAll('.image-text');

    cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
            cardOverlay.forEach((card) => {
                card.style.animation = `cardOverlayFade 0.5s ease-in-out`;
            });
            cardText.forEach((card) => {
                card.style.animation = `cardTextFade 0.5s ease-in-out`
            });
        });
    });
}

/* Btt Link JavaScript */

const bttLink = () => {
    //Get the button:
    mybutton = document.querySelector(".bttLink");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.classList.add('bttLinkTranslate');
        } else if (document.body.scrollTop < 300 || document.documentElement.scrollTop < 300){
            mybutton.classList.remove('bttLinkTranslate');
        }
    }

    mybutton.onclick = function() {
        topFunction();
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 
}

/* Navigation JavaScript */

const navSlide = () => {
    const logo = document.querySelector('.logo');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.primary-navigation');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');
    const bg = document.querySelector('.bg');

    burger.addEventListener('click', () => {
        //Toggle Nav
        navLinks.classList.toggle('nav-link-active');
        nav.classList.toggle('nav-active');
        bg.classList.toggle('body-active');

        //Animate Liks
        navLinksLi.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        //Burger animation
        burger.classList.toggle('toggle');
    });
    
    bg.addEventListener('click', () => {

        //Animate Liks
        if (nav.classList.contains('nav-active')) {
            
            navLinksLi.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

        }

        navLinks.classList.remove('nav-link-active');
        nav.classList.remove('nav-active');
        bg.classList.remove('body-active');
        burger.classList.remove('toggle');
    });

    navLinks.addEventListener('click', () => {

        //Animate Liks
        if (nav.classList.contains('nav-active')) {
            
            navLinksLi.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

        }

        navLinks.classList.remove('nav-link-active');
        nav.classList.remove('nav-active');
        bg.classList.remove('body-active');
        burger.classList.remove('toggle');
    });

}

navSlide();
cardFade();
bttLink();

/* Loader */

document.body.onload = function () {
  document.querySelector(".loader-bg").classList.add("hidden");
};
