'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    console.log('current class name: ' + className);

    if (className == "ligh-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});