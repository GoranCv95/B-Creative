'use strict';

// Counter

let valueDisplays = document.querySelectorAll('.counter-number');
let interval = 3000;

valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
       startValue += 1;
       valueDisplay.textContent = startValue;
       if(startValue === endValue) {
        clearInterval(counter)
       }
    }, duration);
});