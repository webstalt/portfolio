const slider = require('./common/slider');
// const map = require('./common/map');
const svg4everybody = require('./common/svg4everybody');
const $ = require('jquery');


// const threejs = require('./common/three.min.js');
// const webGL = require('./common/webgl');
slider();
// map();
$();
svg4everybody();
// threejs();
// webgl();


// flip
if (document.querySelector('.index__wrap') !== null) {

    const container = document.querySelector('.index__wrap');
    const flipButton = document.querySelector('.index__flip-button');
    const flipBack = document.querySelector('.index__button-back');

    flipButton.addEventListener('click', e => {
    e.preventDefault();
    container.classList.toggle("index__wrap_rotate");
    });

    flipBack.addEventListener('click', e => {
    e.preventDefault();
    container.classList.toggle("index__wrap_rotate");
    });
}


// menu 
if (document.querySelector('.hero__menu-icon') !== null) {
    
    const menuButton = document.querySelector('.hero__menu-icon');
    const menu = document.querySelector('.hero__menu');
                
    menuButton.addEventListener('click', e => {
        e.preventDefault();
        menu.classList.toggle('hero__menu_active'); 
    });
}