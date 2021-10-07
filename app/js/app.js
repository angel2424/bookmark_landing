const hamburgerBtn = document.querySelector('.hamburger');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');
const tabPanels = document.querySelectorAll('.tab_panel');
const tabBtns = document.querySelectorAll('.tab_btn');

hamburgerBtn.addEventListener('click', () => {
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.style.top = '-100vh';
    } else {
        header.classList.add('open');
        overlay.style.top = '114px';
    }
})

function showPanel(panelIndex) {
    tabBtns.forEach(function(node) { 
        node.classList.remove('active');
    });
    tabBtns[panelIndex].classList.add('active');

    tabPanels.forEach(function(node) {
        node.style.display = 'none';
    });
    tabPanels[panelIndex].style.display = 'flex';
}

showPanel(0);