"use strict"

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click' , () => {
    menu.classList.toggle('disp');

});