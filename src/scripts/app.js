const spinner = document.querySelector('.spinner');
    document.onload = function(){
    spinner.classList.add('spinner_hidden');
    }();

const slider = require('./common/slider');
const svg4everybody = require('./common/svg4everybody');
const $ = require('jquery');
const map =  require('./common/map');
// const webGL = require('./common/webgl');

slider();
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
// active class
    window.onscroll = function(){
        const clientCenterY = document.documentElement.clientHeight / 2;
        const articleItemArr = document.querySelectorAll('.articles__item');
        const articleItem = Array.prototype.slice.call(articleItemArr);
        const headingsItems = document.querySelectorAll('.blog__headings-item');
        const leftHeadings = Array.prototype.slice.call(headingsItems);

        for (var i = 0; i < articleItem.length; i++) {
            if (articleItem[i].getBoundingClientRect().top < -15 || articleItem[i]
            .getBoundingClientRect().top > clientCenterY) {            
            leftHeadings[i].classList.remove('blog__headings-item_active');
            } 
            else {
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

//for tablets
    const sidebarTrigger = document.querySelector('.blog__sidebar-trigger');
    sidebarTrigger.onclick = function(e){
        document.querySelector('.blog__sidebar').classList.toggle('blog__sidebar_visible');
        document.querySelector('.blog__content').classList.toggle('blog__content_short');
    }
}
    //anchors

if (document.querySelector('.blog__headings-link') !== null){ 
    (function() {  
            // Function to animate the scroll
            var smoothScroll = function (anchor, duration) {
    
                // Calculate how far and how fast to scroll
                var startLocation = window.pageYOffset;
                var endLocation = anchor.offsetTop;
                var distance = endLocation - startLocation;
                var increments = distance/(duration/16);
                var stopAnimation;
    
                // Scroll the page by an increment, and check if it's time to stop
                var animateScroll = function () {
                    window.scrollBy(0, increments);
                    stopAnimation();
                };
    
                // If scrolling down
                if ( increments >= 0 ) {
                    // Stop animation when you reach the anchor OR the bottom of the page
                    stopAnimation = function () {
                        var travelled = window.pageYOffset;
                        if ( (travelled >= (endLocation - increments)) ) 
                        {
                            clearInterval(runAnimation);
                        }
                    };
                }
                // If scrolling up
                else {
                    // Stop animation when you reach the anchor OR the top of the page
                    stopAnimation = function () {
                        var travelled = window.pageYOffset;
                        if ( travelled <= (endLocation || 0) ) {
                            clearInterval(runAnimation);
                        }
                    };
                }
    
                // Loop the animation function
                var runAnimation = setInterval(animateScroll, 16);
           
            };
    
            // Define smooth scroll links
            var scrollToggle = document.querySelectorAll('.blog__headings-link');

        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });
 })();
};

if (document.querySelector('.map') !== null){
    map();
}