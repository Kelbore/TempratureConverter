"use strict";

window.onload = init;

function init() {
    const converterBtn = document.getElementById("converterBtn");
    if(converterBtn != null) {
      converterBtn.onclick = onConverterBtnClicked;
    }
    const converterBtnF = document.getElementById("converterBtnF");
    if(converterBtnF != null) {
      converterBtnF.onclick = fahrenheitBtnClicked;
    }
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.onclick = resetInputField;
}

    const celsiusTemp = document.getElementById("celsiusTemp");
    const tempInFahrenheit = document.getElementById("tempInFahrenheit");

    const fahrenTemp = document.getElementById("fahrenTemp");
    const tempInCelsius = document.getElementById("tempInCelsius");

function  onConverterBtnClicked() {
    const temp = Number(celsiusTemp.value);
    const fahrenheit = (1.8*temp) + 32;
    tempInFahrenheit.value = fahrenheit;
}     

function fahrenheitBtnClicked() {
    const fahrenheitValue = Number(fahrenTemp.value);
    const x = 5/9;
    const answer = (fahrenheitValue - 32) * x;
    tempInCelsius.value = answer;
}

function resetInputField() {
    document.getElementById("myForm").reset();
}

  