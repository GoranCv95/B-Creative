"use strict";

// Counter

const sectionHeroEl = document.querySelector(".section-portfolio");

let valueDisplays = document.querySelectorAll(".counter-number");
let interval = 3000;

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === true) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));

        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue === endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-280px",
  }
);
obs.observe(sectionHeroEl);

const hoverEffect = document.querySelectorAll(".about-icon");
const icons = document.querySelectorAll(".helper");
const titles = document.querySelectorAll(".heading-secondary");
const lines = document.querySelectorAll(".small-line");


