let page = 0;
let index = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const gallery = document.querySelector("#gallery").getElementsByTagName('img');
const galleryLarge = document.querySelector("#gallery-large").getElementsByTagName('img');

const slide = (button) => {
    if (button === "prev" && page !== 0) {
        gallery[page].classList.remove("active")
        page--;
        gallery[page].classList.add("active")
    }
    if (button === "next" && page < gallery.length - 1) {
        gallery[page].classList.remove("active")
        page++;
        gallery[page].classList.add("active")
    }
}

for (let i = 0; i < galleryLarge.length; i++) {
    galleryLarge[i].addEventListener('click', function(){click(event, i)});
}

const click = (e, i) => {
    galleryLarge[index].classList.remove("active-large")
    gallery[index].classList.remove("active")
    index = i;
    e.target.classList.add("active-large")
    gallery[i].classList.add("active")
}

prev.addEventListener('click', function(){slide("prev")});
next.addEventListener('click', function(){slide("next")});