let menuBtn = document.getElementById('menu-btn');
let toggleMenu = true;
let menuList = document.getElementById('mn-list');


menuBtn.addEventListener('click', () => {
    if (toggleMenu) {
        menuBtn.classList.add('is-active');
        menuList.classList.add('menu-active');
        toggleMenu = false;
    } else {
        menuBtn.classList.remove('is-active');
        menuList.classList.remove('menu-active');
        toggleMenu = true;
    }
})