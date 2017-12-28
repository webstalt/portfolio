const slides = document.querySelectorAll('.slider__item')
const next = document.querySelector('.slider__controls_next');
const previous = document.querySelector('.slider__controls_previous');
const controls = document.querySelectorAll('.slider__controls');
const nav = document.querySelectorAll('.slider-nav__item');
const navArr = document.querySelector('.slider-nav__list');

let currentSlide = 0;

// переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'slider__item';
    nav[currentSlide].className = 'slider-nav__item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__item slider__item_active';
    nav[currentSlide].className = 'slider-nav__item slider-nav__item_active';
}

// навешивает обработчики событий на элементы next и previous 
function setupListners(){
    next.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous.onclick = function(){
        goToSlide(currentSlide-1);
    }
    nav.onclick = function(e){
        let index = navArr.indexOf(e.currentTarget);
        console.log(index);

        currentSlide = index;
        goToSlide(currentSlide);
    }
}

// показывает кнопки для навигации
function showButtons() {
    for (var i=0; i<controls.length; i++){
        controls[i].style.display = 'block';
    }
}

// инициализация слайдера
function sliderInit() {
    if (slides.length !== 0){
        setupListners();
        showButtons();
    }
}

module.exports = sliderInit;