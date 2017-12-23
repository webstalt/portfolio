const slider = require('./common/slider');
const map = require('./common/map');
const svg4everybody = require('./common/svg4everybody');
const $ = require('./common/jquery-3.2.1.min.js');

const threejs = require('./common/three.min.js');
const webGL = require('./common/webgl');

slider();
map();
$();
svg4everybody();
threejs();
webgl();

console.log('in app.js')