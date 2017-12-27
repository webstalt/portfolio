const flipButton = document.querySelector('.index__flip-button');
const container = document.querySelector('.index__wrap');
 
    function flipEffect(){
        flipButton.onclick = function() {
            container.toggleClass("index__wrap_rotate");
    }
};
    flipEffect();

module.exports = flipEffect;