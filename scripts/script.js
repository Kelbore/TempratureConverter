"use strict";

window.onload = init;

function init() {
    const converterBtn = document.getElementById("converterBtn");
    converterBtn.onclick = fahrenheitBtnClicked;
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.onclick = resetInputField;
}

    const fahrenTemp = document.getElementById("fahrenTemp");
    const tempInCelsius = document.getElementById("tempInCelsius");

function fahrenheitBtnClicked() {
    const fahrenheitValue = Number(fahrenTemp.value);
    const x = 5/9;
    const answer = (fahrenheitValue - 32) * x;
    tempInCelsius.value = answer;
}

function resetInputField() {
    document.getElementById("myForm").reset();
}