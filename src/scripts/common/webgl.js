window.onload = function() {
    Player.init();
}

Player = {
    init: function() {
        let container = document.getElementsByClassName('webgl')[0];
        this.scene = new THREE.Scene();

        let aspect = container.offsetWidth / container.offsetHeight;
        this.camera = new THREE.PerspectiveCamera(30.0, aspect, 1, 1000);

        this.renderer = new THREE.WebGLRenderer();
        container.appendChild(this.renderer.domElement);

        this.render(this.scene, this.camera);
    }
}