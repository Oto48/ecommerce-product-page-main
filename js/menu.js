const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menu-button");
const menuClose = document.querySelector("#menu-close");

const showMenu = () => {
    menu.classList.add("active-item");
}

const closeMenu = () => {
    menu.classList.remove("active-item");
}

menuButton.addEventListener('click', function(){showMenu()});
menuClose.addEventListener('click', function(){closeMenu()});