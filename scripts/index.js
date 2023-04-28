"use strict";

window.onload = init;

function init() {
    const converterBtn = document.getElementById("converterBtn");
    converterBtn.onclick = onConverterBtnClicked;
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.onclick = resetInputField;
}

    const celsiusTemp = document.getElementById("celsiusTemp");
    const tempInFahrenheit = document.getElementById("tempInFahrenheit");


function  onConverterBtnClicked() {
    const temp = Number(celsiusTemp.value);
    const fahrenheit = (1.8*temp) + 32;
    tempInFahrenheit.value = fahrenheit;
}     

function resetInputField() {
    document.getElementById("myForm").reset();
}

  