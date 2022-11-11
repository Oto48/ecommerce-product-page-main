let page = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const gallery = document.querySelector("#gallery").getElementsByTagName('img');

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

prev.addEventListener('click', function(){slide("prev")});
next.addEventListener('click', function(){slide("next")});