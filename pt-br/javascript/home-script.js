const navEl = document.querySelector('.navjs');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navEl.classList.add('nav-scrolled');
    } else if (window.scrollY <= 100 ) {
        navEl.classList.remove('nav-scrolled');
    }
});