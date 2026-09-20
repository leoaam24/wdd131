const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const temperature = Number(document.querySelector(".value.temp").textContent);
const windSpeed = Number(document.querySelector(".value.wind").textContent);
const windChill = document.querySelector(".value.winc");
const testTemp = document.querySelector(".testTemp");
const testWindSpeed = document.querySelector(".testWindSpeed");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.textContent = document.lastModified;

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + ((0.3965 * temperature) * (windSpeed ** 0.16))).toFixed(2)
}

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = calculateWindChill(temperature, windSpeed)
} else {
    windChill.textContent = "N/A"
}








