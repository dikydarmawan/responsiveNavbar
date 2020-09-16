const hero = document.querySelector(".hero"),
      slider = document.querySelector(".slider"),
      logo = document.querySelector(".logo"),
      headline = document.querySelector(".headline"),
      navlink = document.querySelector(".nav-links");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%"}, { height: "100%", ease: Power2.easeInOut })
  .fromTo(logo, 0.5, { opacity: 0, x:30}, { opacity: 1, x:0}, "-=0.5")
  .fromTo(navlink, 0.5, { opacity: 0, x:30}, { opacity: 1, x:0}, "-=0.5")
  .fromTo(headline, 0.5, { opacity: 0, x:60}, { opacity: 1, x:0}, "-=0.5");