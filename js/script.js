"use strict";

// Counter

let sectionCounter = document.querySelector(".section-counter");

let valueDisplays = document.querySelectorAll(".counter-number");

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let interval = 200;

    valueDisplays.forEach((valueDisplay) => {
      function updateCoutner() {
        const targetNumber = +parseInt(valueDisplay.getAttribute("data-val"));
        const initialNumber = +valueDisplay.innerText;
        const incPerCount = targetNumber / interval;
        if (initialNumber < targetNumber) {
          valueDisplay.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(updateCoutner, 40);
        }
      }
      updateCoutner();
    });
  },
  {
    root: null,
    threshold: 0.4,
  }
);

CounterObserver.observe(sectionCounter);

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
