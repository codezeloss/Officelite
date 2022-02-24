"use strict";

const formBtn = document.getElementById("form-list");
const selectionMenu = document.querySelector(".selection-list");
const choiceClick01 = document.querySelector(".choice-01");
const choiceClick02 = document.querySelector(".choice-02");
const choiceClick03 = document.querySelector(".choice-03");
const listIcon = document.querySelector(".list-icon");

formBtn.addEventListener("click", function () {
  selectionMenu.classList.toggle("hidden");
});

choiceClick01.addEventListener("click", function () {
  selectionMenu.classList.add("hidden");
});
choiceClick02.addEventListener("click", function () {
  selectionMenu.classList.add("hidden");
});
choiceClick03.addEventListener("click", function () {
  selectionMenu.classList.add("hidden");
});
