"use strict";

// Counter

let valueDisplays = document.querySelectorAll(".counter-number");
let interval = 3000;

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

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.querySelectorAll(".main-nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  })
);

//
const logos = document.querySelectorAll('.logos');
const designes = document.querySelectorAll('.design');
const developments = document.querySelectorAll('.development');
const opti = document.querySelector('.opti');

const btnAll = document.getElementById('all');
const btnLogo = document.getElementById('logo');
const btnDesign = document.getElementById('design');
const btnDevelopment = document.getElementById('development');

const grid = document.querySelector('.grid-wrapper');

btnLogo.addEventListener('mouseenter', function(){
  designes.forEach(img => img.style.display = 'none');
  developments.forEach(img => img.style.display = 'none');
  opti.style.display = 'none';
  grid.classList.remove('grid-wrapper');
  grid.style.display = 'flex';
  grid.classList.add('grid-3-col');
})

btnLogo.addEventListener('mouseleave', function(){
  designes.forEach(img => img.style.display = 'block');
  developments.forEach(img => img.style.display = 'block');
  opti.style.display = 'block';
  grid.classList.remove('grid-3-col');
  grid.style.display = 'grid';
  grid.classList.add('grid-wrapper');
})

btnDesign.addEventListener('mouseover', function(){
  logos.forEach(img => img.style.display = 'none');
  developments.forEach(img => img.style.display = 'none');
  opti.style.display = 'none';
  grid.classList.remove('grid-wrapper');
  grid.style.display = 'flex';
  grid.classList.add('grid-2-col');
})

btnDesign.addEventListener('mouseleave', function(){
  logos.forEach(img => img.style.display = 'block');
  developments.forEach(img => img.style.display = 'block');
  opti.style.display = 'block';
  grid.classList.remove('grid-2-col');
  grid.style.display = 'grid';
  grid.classList.add('grid-wrapper');
})

btnDevelopment.addEventListener('mouseover', function(){
  designes.forEach(img => img.style.display = 'none');
  logos.forEach(img => img.style.display = 'none');
  opti.style.display = 'none';
  grid.classList.remove('grid-wrapper');
  grid.style.display = 'flex';
  grid.style.directions = 'row';
  // grid.style.height = '10rem';
  grid.classList.add('grid-2-col');
})

btnDevelopment.addEventListener('mouseleave', function(){
  designes.forEach(img => img.style.display = 'block');
  logos.forEach(img => img.style.display = 'block');
  opti.style.display = 'block';
  grid.classList.remove('grid-2-col');
  grid.style.display = 'grid';
  grid.classList.add('grid-wrapper');
})













