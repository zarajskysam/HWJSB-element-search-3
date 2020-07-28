const prev = Array.from(document.getElementsByClassName('slider__arrow_prev'));
const next = Array.from(document.getElementsByClassName('slider__arrow_next'));
const item = Array.from(document.getElementsByClassName('slider__item'));



next[0].onclick = function() {
    sliderNext();
}

prev[0].onclick = function() {
    sliderPrev();
}

let counter = 0;

let sliderNext = function() {
    removeClass();
    counter++;
    if (counter > item.length - 1) {
        counter = 0;
    }
    item[counter].classList.add('slider__item_active');
    console.log(counter);
}

let sliderPrev = function() {
    removeClass();
    counter--;
    if (counter < 0) {
        counter = item.length - 1;
    }
    item[counter].classList.add('slider__item_active');
    console.log(counter);
}

let removeClass = function() {
   let element = item.find(items => items.classList.contains('slider__item_active'));
   element.classList.remove('slider__item_active');
}