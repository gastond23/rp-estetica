let menuBtn = document.getElementById('menu-btn');
let toggleMenu = true;
let menuList = document.getElementById('mn-list');
let body = document.getElementsByClassName('body');


menuBtn.addEventListener('click', () => {
    if (toggleMenu) {
        menuBtn.classList.add('is-active');
        menuList.classList.add('menu-active');
        body[0].classList.add('fix');
        toggleMenu = false;
    } else {
        menuBtn.classList.remove('is-active');
        menuList.classList.remove('menu-active');
        body[0].classList.remove('fix');
        toggleMenu = true;
    }
})