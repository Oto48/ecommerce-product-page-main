let page = 0;
let index = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const modalPrev = document.querySelector("#modal-prev");
const modalNext = document.querySelector("#modal-next");
const gallery = document.querySelector("#gallery").getElementsByTagName('img');
const galleryLarge = document.querySelector("#gallery-large").getElementsByTagName('div');
const galleryModal = document.querySelector("#gallery-modal");
const galleryModalImages = document.querySelector("#gallery-modal-images").getElementsByTagName('img');
const modalThumbnails = document.querySelector("#modal-thumbnails").getElementsByTagName('div');
const modalBtn = document.querySelector("#modal-close");

const slide = (button) => {
    if (button === "prev" && page !== 0) {
        gallery[page].classList.remove("active");
        galleryModalImages[page].classList.remove("active");
        page--;
        clickThumbnail(page);
        gallery[page].classList.add("active");
        galleryModalImages[page].classList.add("active");
    }
    if (button === "next" && page < gallery.length - 1) {
        gallery[page].classList.remove("active");
        galleryModalImages[page].classList.remove("active");
        page++;
        clickThumbnail(page);
        gallery[page].classList.add("active");
        galleryModalImages[page].classList.add("active");
    }
}

const clickThumbnail = (i) => {
    galleryLarge[index].classList.remove("active-large");
    modalThumbnails[index].classList.remove("active-large");
    galleryModalImages[index].classList.remove("active");
    gallery[index].classList.remove("active");
    index = i;
    page = i;
    galleryLarge[index].classList.add("active-large");
    modalThumbnails[index].classList.add("active-large");
    galleryModalImages[index].classList.add("active");
    gallery[index].classList.add("active");
}

const showModal = () => {
    galleryModal.classList.add("flex");
}

const closeModal = (e) => {
    if (e == "btn") {
        galleryModal.classList.remove("flex");
    } else if (!galleryModal.firstElementChild.contains(e.target)) {
        galleryModal.classList.remove("flex");
    }
}

for (let i = 0; i < galleryLarge.length; i++) {
    galleryLarge[i].addEventListener('click', function(){clickThumbnail(i)});
    modalThumbnails[i].addEventListener('click', function(){clickThumbnail(i)});
}

for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', function(){showModal()});
}

prev.addEventListener('click', function(){slide("prev")});
next.addEventListener('click', function(){slide("next")});
modalPrev.addEventListener('click', function(){slide("prev")});
modalNext.addEventListener('click', function(){slide("next")});
modalBtn.addEventListener('click', function(){closeModal("btn")});
galleryModal.addEventListener("click", function(){closeModal(event)});
// window.addEventListener('click', function(e){   
//     if (galleryModal.classList.contains("flex") && !galleryModal.firstElementChild.contains(e.target)) {
//         galleryModal.classList.remove("flex");
//     }
// });