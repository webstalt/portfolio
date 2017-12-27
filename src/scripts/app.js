const slider = require('./common/slider');
// const map = require('./common/map');
const svg4everybody = require('./common/svg4everybody');
const $ = require('jquery');
// const flip = require('./common/flip');


// const threejs = require('./common/three.min.js');
// const webGL = require('./common/webgl');
// flip();
slider();
// map();
$();
svg4everybody();
// threejs();
// webgl();

document.addEventListener('DOMContentLoaded', function() {
       
    console.log('dom is ready');
});
// function f() {
// const container = document.getElementsByClassName('index__wrap');
// const flipButton = document.getElementsByClassName('index__flip-button');

// function flip() {
//     flipButton.addEventListener('click', e => {
//         e.preventDefault();
//         container.classList.toggle("index__wrap_rotate");
//     });
// };

// return flip();


// };
// f();

const container = document.querySelector('.index__wrap');
const flipButton = document.querySelector('.index__flip-button');

(function() {
            
        flipButton.addEventListener('click', e => {
        e.preventDefault();
        container.classList.toggle("index__wrap_rotate");
        });
  
})();

const burgerInit = document.querySelector('hamburger');

burgerInit.addEventListener('click', e => {
    e.preventDefault();
    burgerInit.classList.toggle('hero__menu_active'); 
});
