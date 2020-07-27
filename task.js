const prev = Array.from(document.getElementsByClassName('slider__arrow_prev'));
const next = Array.from(document.getElementsByClassName('slider__arrow_next'));
const item = Array.from(document.getElementsByClassName('slider__item'));



next[0].onclick = function() {
    slidernext();
}

prev[0].onclick = function() {
    sliderprev();
}

let quantityNext = 0;

let slidernext = function() {
    sliderremove();
    if (quantityNext > item.length - 1) {
        quantityNext = 0;
    }
    console.log(quantityNext);
    
    item[quantityNext].classList.add('slider__item_active');
    
    
    quantityNext++;
    
}

let sliderprev = function() {
    sliderremove();
    if (quantityNext < 0) {
        quantityNext = item.length - 1;
    }
    console.log(quantityNext);

    item[quantityNext].classList.add('slider__item_active');
    quantityNext = quantityNext - 1;
}

let sliderremove = function() {
    for (let i = 0; i < item.length; i++){
        item[i].classList.remove('slider__item_active');
    }
}
