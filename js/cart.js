let count = 0;
let price = 0;
let total = 0;
let removeBtn;
const basket = document.querySelector("#basket");
const quantity = document.querySelector("#quantity");
const basketContent = document.querySelector("#basket-content");
const amount = document.querySelector("#amount");
const basketBtn = document.querySelector("#basket-btn");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const addBtn = document.querySelector("#add");

const plus = () => {
    count++;
    quantity.innerHTML = count;
}

const minus = () => {
    if (count !== 0) {
        count--;
        quantity.innerHTML = count;
    }
}

const add = () => {
    total += count;
    price += count * 125;
    if (count !== 0) {
        amount.classList.add('flex-amount');
        amount.innerHTML = `<p>${total}</p>`;
    }
}

const remove = () => {
    total = 0;
    price = 0;
    amount.classList.remove('flex-amount');
    basketContent.innerHTML = 
    `
        <div class="content-2">
            <p class="bold text-dark-grey">Your cart is empty</p>
        </div>
    `
}

const showBasket = () => {
    basket.classList.toggle("active-item");
    if (basket.classList.contains("active-item")) {
        if (price !== 0) {
            basketContent.innerHTML = 
            `
                <div class="content-1 gap-1 p-1">
                    <img src="images/image-product-1.jpg" alt="">
                    <div>
                    <p class="text-dark-grey">Fall Limited Edition Sneakers</p>
                        <div class="flex gap-1">
                            <p class="text-dark-grey">$125.00 x ${count}</p>
                            <p class="bold">$${price}.00</p>
                        </div>
                    </div>
                    <button id="remove">
                        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 
                            .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 
                            1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 
                            6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 
                            .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                            </defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
                        </svg>
                    </button>
                </div>
                <div class="py-1">
                    <button class="checkout bg-orange rounded bold text-white">Checkout($125.00)</button>
                </div>
            `
            removeBtn = document.querySelector("#remove");
            removeBtn.addEventListener('click', function(){remove()});
        }else {
            basketContent.innerHTML = 
            `
                <div class="content-2">
                    <p class="bold text-dark-grey">Your cart is empty</p>
                </div>
            `
        }
    }
}

plusBtn.addEventListener('click', function(){plus()});
minusBtn.addEventListener('click', function(){minus()});
basketBtn.addEventListener('click', function(){showBasket()});
addBtn.addEventListener('click', function(){add()});

window.addEventListener('click', function(e){   
    if (basketBtn.contains(e.target) || basket.contains(e.target) || (removeBtn && removeBtn.contains(e.target))) {
        return;
    } else if (basket.classList.contains("active-item")){
        basket.classList.remove("active-item");
    }
});