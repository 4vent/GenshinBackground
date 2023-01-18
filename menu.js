document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('#menu-button');
    const bg = document.querySelector('.menu-bg');
    
    btn.addEventListener('click', () => {
        bg.classList.toggle('open-menu');
    });
})