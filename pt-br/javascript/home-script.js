const navEl = document.querySelector('.navjs');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navEl.classList.add('nav-scrolled');
    } else if (window.scrollY <= 50 ) {
        navEl.classList.remove('nav-scrolled');
    }
});