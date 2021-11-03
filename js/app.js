var strPhrases = {
  strings: ["Software Engineer", "Developer", "Problem Solver"],
  typeSpeed: 80,
  backSpeed: 65,
  loop: true,
};

var typed = new Typed('#typedPhrases', strPhrases);

ScrollReveal().reveal('.contact-list', {
    delay: 500,
    duration: 100,
    reset: true
});
