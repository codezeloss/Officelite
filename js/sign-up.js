"use strict";

import * as myFuns from "./script.js";

const formBtn = document.getElementById("form-list");
const selectionMenu = document.querySelector(".selection-list");
const choiceClick01 = document.querySelector(".choice-01");
const choiceClick02 = document.querySelector(".choice-02");
const choiceClick03 = document.querySelector(".choice-03");
const listIcon = document.querySelector(".list-icon");
const choiceBox = document.getElementById("choice-box");

formBtn.addEventListener("click", function () {
  selectionMenu.classList.toggle("hidden");
});

choiceClick01.addEventListener("click", function () {
  selectionMenu.classList.add("hidden");
  choiceBox.innerHTML = choiceClick01.innerHTML;
});
choiceClick02.addEventListener("click", function () {
  selectionMenu.classList.add("hidden");
  choiceBox.innerHTML = choiceClick02.innerHTML;
});
choiceClick03.addEventListener("click", function () {
  selectionMenu.classList.add("hidden");
  choiceBox.innerHTML = choiceClick03.innerHTML;
});

// Timer
myFuns.daysCountDown;
myFuns.hoursCountDown;
myFuns.minsCountDown;
myFuns.secsCountDown;
