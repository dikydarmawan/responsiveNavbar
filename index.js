const navSlide = () => {
    const burger = document.querySelector('.burger'),
          nav  = document.querySelector('.nav-links'),
          navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
    
        });

        burger.classList.toggle('toggle');
    });

    
}

navSlide();

