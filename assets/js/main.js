"use strict";
let $ = (el) => document.querySelector(el);

// $("#heading").classList.add("big");
// $("#list").classList.add("todo");

function changeHeadline() {
    $("#heading").classList.add("big");
}

function reset() {
    $("#heading").classList.contains("big")
        ? $("#heading").classList.remove("big")
        : null;
}

$("#change").addEventListener("click", changeHeadline);
$("#reset").addEventListener("click", reset);
