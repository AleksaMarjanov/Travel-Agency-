const button = document.querySelector('.button');


function mssg() {
    alert('Thank you contacting us, somebody will reach out to you in next 48 bussiness hours');
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            (link.style.animation) ? (link.style.animation) = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();




