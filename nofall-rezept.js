const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
});

// Basisdaten pro Portion
const zutaten = {
    pMehl: 150,
    pTrockenhefe: 1 / 4,
    pWasser: 62.5,
    pJoghurt: 1,
    pOlivenöl: 1,
    pSalz: 0.4,
    pZucker: 1 / 4,
    pKäse: 100,
    pSucuk: 5,
    pEier: 1 / 4,

};

// Funktion zur Bruchdarstellung
function setBruchText(id, menge, einheit) {
    let bruchTexte = {
        0.25: "¼",
        0.3: "⅓",
        0.33: "⅓",
        0.5: "½",
        0.6: "⅗",
        0.66: "⅔",
        0.75: "¾",
        0.8: "⅘",
        1.2: "1⅕",
        1.25: "1¼",
        1.3: "1⅓",
        1.5: "1½",
        1.6: "1⅗",
        1.75: "1¾",
        1.8: "1⅘",
        2.25: "2¼",
        2.4: "2⅖",
        2.5: "2½",
        2.75: "2¾",
        2.8: "2⅘",
        3.2: "3⅕",
        3.25: "3¼",
        3.5: "3½",
        3.75: "3¾",
        4.5: "4½",
        5.25: "5¼",
        62.5: "62½"
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
    let pmengeMehl = +(zutaten.pMehl * portionen).toFixed(2);
    let pmengeTrockenhefe = +(zutaten.pTrockenhefe * portionen).toFixed(2);
    let pmengeZWasser = +(zutaten.pWasser * portionen).toFixed(2);
    let pmengeJoghurt = +(zutaten.pJoghurt * portionen).toFixed(2);
    let pmengeOlivenöl = +(zutaten.pOlivenöl * portionen).toFixed(1);
    let pmengeSalz = +(zutaten.pSalz * portionen).toFixed(2);
    let pmengeZucker = +(zutaten.pZucker * portionen).toFixed(2);
    let pmengeKäse = +(zutaten.pKäse * portionen).toFixed(1);
    let pmengeSucuk = +(zutaten.pSucuk * portionen).toFixed(1);
    let pmengeEier = +(zutaten.pEier * portionen).toFixed(1);


    // Standardanzeige (wird ggf. durch Bruch ersetzt)
    document.getElementById('p-Mehl').innerHTML = pmengeMehl + "g Mehl";
    document.getElementById('p-Trockenhefe').innerHTML = pmengeTrockenhefe + " Pck. Trockenhefe";
    document.getElementById('p-Wasser').innerHTML = pmengeZWasser + "ml Wasser, lauwarm";
    document.getElementById('p-Joghurt').innerHTML = pmengeJoghurt + " EL Joghurt";
    document.getElementById('p-Olivenöl').innerHTML = pmengeOlivenöl + " EL Olivenöl";
    document.getElementById('p-Salz').innerHTML = pmengeSalz + " TL Salz";
    document.getElementById('p-Zucker').innerHTML = pmengeZucker + " TL Zucker";
    document.getElementById('p-Käse').innerHTML = pmengeKäse + "g Käse (Kasar), gerieben";
    document.getElementById('p-Sucuk').innerHTML = pmengeSucuk + " Scheibe(n) Sucuk";
    document.getElementById('p-Eier').innerHTML = pmengeEier + " Ei(er) zum Einstreichen";


    // Brüche darstellen (falls vorhanden)
    setBruchText("p-Mehl", pmengeMehl, "g Mehl");
    setBruchText("p-Trockenhefe", pmengeTrockenhefe, " Pck. Trockenhefe");
    setBruchText("p-Wasser", pmengeZWasser, "ml Wasser, lauwarm");
    setBruchText("p-Joghurt", pmengeJoghurt, " EL Joghurt");
    setBruchText("p-Olivenöl", pmengeOlivenöl, " EL Olivenöl");
    setBruchText("p-Salz", pmengeSalz, " TL Salz");
    setBruchText("p-Zucker", pmengeZucker, "TL Zucker");
    setBruchText("p-Käse", pmengeKäse, "g Käse (Kasar), gerieben");
    setBruchText("p-Sucuk", pmengeSucuk, " Scheibe(n) Sucuk");
    setBruchText("p-Eier", pmengeEier, " Ei(er) zum Einstreichen");
}

