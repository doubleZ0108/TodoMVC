// var deviceWidth = window.screen.width;
// var deviceHeight = window.screen.height;

var deviceHeight = window.innerHeight;
var deviceWidth = window.innerWidth;

function $(id){
    return document.getElementById(id);
}

function $c(type){
    return document.createElement(type);
}

function $all(css_selector){
    return document.querySelectorAll(css_selector);
}