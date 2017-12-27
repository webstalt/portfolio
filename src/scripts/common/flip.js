const flipButton = document.querySelectorAll('.index__flip-button');
const container = document.querySelectorAll('.index__wrap');
 
    function flipEffect(){
        flipButton.onclick = function() {
            container.toggleClass("index__wrap_rotate");
    }
};
    flipEffect();

module.exports = flipEffect;