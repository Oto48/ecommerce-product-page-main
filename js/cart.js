let count = 0;
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const quantity = document.querySelector("#quantity");

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

plusBtn.addEventListener('click', function(){plus()});
minusBtn.addEventListener('click', function(){minus()});