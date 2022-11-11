const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menu-button");
const menuClose = document.querySelector("#menu-close");

const showMenu = () => {
    menu.classList.add("active-menu");
}

const closeMenu = () => {
    menu.classList.remove("active-menu");
}

menuButton.addEventListener('click', function(){showMenu()});
menuClose.addEventListener('click', function(){closeMenu()});