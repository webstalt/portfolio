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

document.addEventListener('DOMContentLoaded', function() {
    console.log('dom is ready');
});

const flipButton = document.getElementsByClassName('index__flip-button');
console.log(flipButton);

// const container = document.getElementsByClassname('index__wrap');

flipStart = function() {
flipButton.addEventListener('click', function() {
    console.log('click');
//     // container.classList.toggle("index__wrap_rotate");
   });
};
flipStart();
// init();