const slider = require('./common/slider');
// const map = require('./common/map');
const svg4everybody = require('./common/svg4everybody');
const $ = require('jquery');
const webGL = require('./common/webgl');

slider();
// map();
$();
svg4everybody();
// webGL();


// flip
if (document.querySelector('.index__wrap') !== null) {

    const container = document.querySelector('.index__wrap');
    const flipButton = document.querySelector('.index__flip-button');
    const flipBack = document.querySelector('.index__button-back');

    flipButton.addEventListener('click', e => {
    e.preventDefault();
    container.classList.add("index__wrap_rotate");
    flipButton.style.opacity='0';
    });

    flipBack.addEventListener('click', e => {
    e.preventDefault();
    container.classList.remove("index__wrap_rotate");
    flipButton.style.opacity='1';
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

// articles
if (document.querySelector('.articles__item') !== null){ 

    const sidebar = document.querySelector('.blog__sidebar');
    const blogContent = document.querySelector('.blog__content');

    window.onscroll = function(){
        const clientCenterY = document.documentElement.clientHeight / 2;
        const articleItemArr = document.querySelectorAll('.articles__item');
        const articleItem = Array.prototype.slice.call(articleItemArr);
        const headingsItems = document.querySelectorAll('.blog__headings-item');
        const leftHeadings = Array.prototype.slice.call(headingsItems);

        for (var i = 0; i < articleItem.length; i++) {
            if (articleItem[i].getBoundingClientRect().top < 0 || articleItem[i]
            .getBoundingClientRect().top > clientCenterY) {            
            leftHeadings[i].classList.remove('blog__headings-item_active');
            } 
        } 

        for (var i = 0; i < articleItem.length; i++) {
            if (articleItem[i].getBoundingClientRect().top > 0 && articleItem[i]
            .getBoundingClientRect().top <= clientCenterY) {
            // const activeAttr = articleItem[i].getAttribute('data-scroll-to');
            leftHeadings[i].classList.add('blog__headings-item_active');
            } 
        }    

        if (sidebar.getBoundingClientRect().top <= 30 ) {
            sidebar.classList.add('blog__sidebar_freeze');
        } 

        if (blogContent.getBoundingClientRect().top > 30 ) {
            sidebar.classList.remove('blog__sidebar_freeze');
        } 
    }

    const sidebarTrigger = document.querySelector('.blog__sidebar-trigger');
    sidebarTrigger.onclick = function(e){
        sidebar.classList.toggle('blog__sidebar_visible');
        blogContent.classList.toggle('blog__content_short');
    }
}
