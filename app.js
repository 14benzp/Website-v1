'use strict';
const themeswither = document.querySelector('.theme-btn');
const cleartext = document.querySelector('.clear-btn');
const list = document.querySelector('.Tasks');

themeswither.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";

    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
    console.log();
});

cleartext.addEventListener('click', function() {
    list.children.textContent = "";

});
