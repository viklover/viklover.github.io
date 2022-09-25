
let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('.slide');
let menu_items = slider.querySelectorAll('.area');

let timeout = 8000;
let timer = setTimeout(setNextSlide, timeout);

let current_slide = 0;

function setSlideByIndex(index) {
    slides.forEach(function (elem, slide, parent) {
        elem.classList.remove('active');
    });
    slides[index].classList.add('active');

    menu_items.forEach(function (elem, slide, parent) {
        elem.classList.remove('active');
    });
    menu_items[index].classList.add('active');

    current_slide = index;
}

function setNextSlide() {

    timer = setTimeout(setNextSlide, timeout);

    if (current_slide + 1 >= slides.length) {
        setSlideByIndex(0);
        current_slide = 0;
        return;
    }
    current_slide += 1;
    setSlideByIndex(current_slide);
}

menu_items.forEach(function (value, key,parent) {
    value.onclick = function (e) {
        clearTimeout(timer);
        setSlideByIndex(key);
        timer = setTimeout(setNextSlide, timeout);
    };
});

// setInterval(setNextSlide, 30000);
