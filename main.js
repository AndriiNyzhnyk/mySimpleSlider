var container = document.getElementById("container");
var slider = document.getElementsByClassName("slider");
var sliderWidth = slider[0].offsetWidth;
var sliderLength = slider.length;
container.style.width = sliderWidth * sliderLength + sliderLength * 4 + "px";

var trust = 0;
var shift = 0;
var i = 1;
var interval = setInterval(function () {
    slider[i].style.marginLeft = -sliderWidth - 4 + shift + "px";
    if(trust >= 0) { i++; } else { i--; }
    if(i >= sliderLength) {
        trust--;
        shift = sliderWidth + sliderWidth;
        i--;
    }
    if(i <= 0) {
        trust++;
        i = 1;
        shift = 0;
    }
}, 2500);
