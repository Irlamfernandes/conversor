function convertCelsius() {
    var fahrenheit = document.getElementById("temperatura").value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultado").innerText = celsius.toFixed(2) + "ºC";
}

function convertFahrenheit() {
    var celsius = document.getElementById("temperatura").value;
    var fahrenheit = (celsius *9/5) +32;
    document.getElementById("resultado").innerText = fahrenheit.toFixed(2) + "ºF";
}