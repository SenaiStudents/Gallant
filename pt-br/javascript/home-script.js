const navEl = document.querySelector('.navjs');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navEl.classList.add('nav-scrolled');
    } else if (window.scrollY <= 100 ) {
        navEl.classList.remove('nav-scrolled');
    }
});

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};
  
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});

function cart_click() {
  var cart = document.getElementById("shopping-cart");
  if (cart.style.display == "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
}