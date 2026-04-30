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

document.addEventListener("DOMContentLoaded", function() {
    // 1. Das Bild-Element erstellen, falls es noch nicht im HTML ist
    const yukiImg = document.createElement("img");
    yukiImg.id = "yuki-popup";
    yukiImg.src = "Bilder/funnyyuki.png"; // Hier den Pfad zu deinem Yuki-Lieblingsbild einfügen
    document.body.appendChild(yukiImg);

    const yukiTrigger = document.getElementById("yuki-click");

    yukiTrigger.addEventListener("click", function() {
        // Zufällige Position berechnen (Abzüglich Bildgröße, damit es nicht aus dem Rand ragt)
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 200);
        
        // Zufällige Rotation zwischen -45 und 45 Grad
        const rotation = Math.random() * 90 - 45;

        // Bild positionieren und anzeigen
        yukiImg.style.left = x + "px";
        yukiImg.style.top = y + "px";
        yukiImg.style.transform = `rotate(${rotation}deg)`;
        yukiImg.style.display = "block";

        // Nach 400 Millisekunden (0,4 Sek) wieder verstecken
        setTimeout(function() {
            yukiImg.style.display = "none";
        }, 400);
    });
});