function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + " °C";
    }
    return "N/A";
}

function updateWindChill() {
    const temp = 8;
    const speed = 20;
    const windChill = calculateWindChill(temp, speed);
    document.getElementById("windChill").textContent = windChill;
}

function updateFooter() {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById("currentyear").textContent = year;
    document.getElementById("lastModified").textContent = lastModified;
}

updateWindChill();
updateFooter();
