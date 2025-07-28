const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
});

// Basisdaten pro Portion
const zutaten = {
    rrSchweineschnitzel: 1,
    rrKnoblauch: 3 / 4,
    rrZwiebeln: 1 / 2,
    rrZitronensaft: 1 / 2,
    rrMajoran: 3 / 4,
    rrThymian: 1 / 2,
    rrPaprikapulver: 3 / 4,
    rrKreuzkümmel: 1 / 4,
    rrOlivenöl: 1.5
};

// Funktion zur Bruchdarstellung
function setBruchText(id, menge, einheit) {
    let bruchTexte = {
        0.25: "¼",
        0.5: "½",
        0.75: "¾",
        1.25: "1¼",
        1.5: "1½",
        1.75: "1¾",
        2.25: "2¼",
        2.5: "2½",
        2.75: "2¾",
        3.25: "3¼",
        3.5: "3½",
        3.75: "3¾",
        4.5: "4½",
        5.25: "5¼"
    };

    let element = document.getElementById(id);

    // Vergleicht gerundete Zahl mit Bruchschlüssel
    if (bruchTexte[menge]) {
        element.innerHTML = "<span style='font-size: 18px;'>" + bruchTexte[menge] + "</span> " + einheit;
    }
}

// Hauptfunktion zur Berechnung der Mengen
function rechneMenge() {
    let portionen = (document.getElementById('portionen').value);

    // Eingabekontrolle
    if (portionen < 1) {
        portionen = 1;
        alert("Bitte gib einen Wert zwischen 1 und 8 ein.")
    } else if (portionen > 8) {
        portionen = 8;
        alert("Bitte gib einen Wert zwischen 1 und 8 ein.");
    }

    // Mengen berechnen und auf 2 Nachkommastellen runden
    let rrmengeSchweineschnitzel = zutaten.rrSchweineschnitzel * portionen;
    let rrmengeKnoblauch = +(zutaten.rrKnoblauch * portionen).toFixed(2);
    let rrmengeZwiebeln = +(zutaten.rrZwiebeln * portionen).toFixed(2);
    let rrmengeZitronensaft = +(zutaten.rrZitronensaft * portionen).toFixed(2);
    let rrmengeMajoran = +(zutaten.rrMajoran * portionen).toFixed(2);
    let rrmengeThymian = +(zutaten.rrThymian * portionen).toFixed(2);
    let rrmengePaprikapulver = +(zutaten.rrPaprikapulver * portionen).toFixed(2);
    let rrmengeKreuzkümmel = +(zutaten.rrKreuzkümmel * portionen).toFixed(2);
    let rrmengeOlivenöl = (zutaten.rrOlivenöl * portionen).toFixed(1);

    // Standardanzeige (wird ggf. durch Bruch ersetzt)
    document.getElementById('rr-Schweineschnitzel').innerHTML = rrmengeSchweineschnitzel + " Schweineschnitzel";
    document.getElementById('rr-Knoblauch').innerHTML = rrmengeKnoblauch + " Knoblauchzehe(n)";
    document.getElementById('rr-Zwiebeln').innerHTML = rrmengeZwiebeln + " Zwiebel(n)";
    document.getElementById('rr-Zitronensaft').innerHTML = rrmengeZitronensaft + " EL Zitronensaft";
    document.getElementById('rr-Majoran').innerHTML = rrmengeMajoran + " TL Majoran";
    document.getElementById('rr-Thymian').innerHTML = rrmengeThymian + " TL Thymian";
    document.getElementById('rr-Paprikapulver').innerHTML = rrmengePaprikapulver + " TL Paprikapulver, edelsüß";
    document.getElementById('rr-Kreuzkümmel').innerHTML = rrmengeKreuzkümmel + " TL Kreuzkümmel";
    document.getElementById('rr-Olivenöl').innerHTML = rrmengeOlivenöl + " cl Olivenöl";

    // Brüche darstellen (falls vorhanden)
    setBruchText("rr-Knoblauch", rrmengeKnoblauch, "Knoblauchzehe(n)");
    setBruchText("rr-Zwiebeln", rrmengeZwiebeln, "Zwiebel(n)");
    setBruchText("rr-Zitronensaft", rrmengeZitronensaft, "EL Zitronensaft");
    setBruchText("rr-Majoran", rrmengeMajoran, "TL Majoran");
    setBruchText("rr-Thymian", rrmengeThymian, "TL Thymian");
    setBruchText("rr-Paprikapulver", rrmengePaprikapulver, "TL Paprikapulver, edelsüß");
    setBruchText("rr-Kreuzkümmel", rrmengeKreuzkümmel, "TL Kreuzkümmel");
}

