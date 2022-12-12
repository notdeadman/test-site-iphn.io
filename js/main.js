const btn = document.querySelector('.nav-btn');
const nav = document.querySelector('.navigation-menu');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open')
});