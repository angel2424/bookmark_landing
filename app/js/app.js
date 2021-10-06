const hamburgerBtn = document.querySelector('.hamburger');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');

hamburgerBtn.addEventListener('click', () => {
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.style.top = '-100vh';
    } else {
        header.classList.add('open');
        overlay.style.top = '114px';
    }
})