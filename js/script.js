"use strict";

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

// Timer

// secs
function secsCountDown() {
  secs.innerHTML -= 1;

  if (secs.innerHTML === "0") {
    clearInterval(secsCounter);
  }
}
let secsCounter = setInterval(secsCountDown, 1000);

// mins
function minsCountDown() {
  mins.innerHTML -= 1;

  if (mins.innerHTML === "0") {
    clearInterval(minsCounter);
  }
}
let minsCounter = setInterval(minsCountDown, 60000);

// hours
function hoursCountDown() {
  hours.innerHTML -= 1;

  if (hours.innerHTML === "0") {
    clearInterval(hoursCounter);
  }
}
let hoursCounter = setInterval(hoursCountDown, 3600000);

// days
function daysCountDown() {
  days.innerHTML -= 1;

  if (days.innerHTML === "0") {
    clearInterval(daysCounter);
  }
}
let daysCounter = setInterval(daysCountDown, 86400000);
