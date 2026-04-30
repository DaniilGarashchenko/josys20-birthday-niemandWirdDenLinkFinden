function geheZuSeite(dateiname) {
    window.location.href = dateiname;
}

// Warten, bis das Dokument geladen ist
document.addEventListener("DOMContentLoaded", () => {
    // Die Buttons anhand ihrer Position oder ihres Inhalts finden
    const buttons = document.querySelectorAll(".button-leiste button");

    // Button 1: Fakten
    buttons[0].addEventListener("click", () => {
        geheZuSeite("Fakten.html");
    });

    // Button 2: Ziele
    buttons[1].addEventListener("click", () => {
        geheZuSeite("JosyRun.html");
    });

    // Button 3: Bilder
    buttons[2].addEventListener("click", () => {
        geheZuSeite("WitzigeBilder.html");
    });
});