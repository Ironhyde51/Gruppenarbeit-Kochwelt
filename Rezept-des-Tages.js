const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('show');
});

// Basisdaten als Objekt
let zutaten = {
 // Gramm für 1 Portion
    rdtButter: 250,
    rdtZucker: 50,
    rdtMehl: 500,
    rdtSalz: 1,
    rdtHefe: 42,
    rdtEier: 2,
    rdtMilch: 0.2, 

};

function rechneMenge() {
    // Portionen aus Input lesen
    let portionen = document.getElementById('portionen').value;

    // Prüfen, ob Portionen gültig sind
    if (portionen < 1) {
        portionen = 1;
    } else if (portionen > 8) {
        portionen = 8;
        alert("Bitte gebe einen Wert zwischen 1 und 8 ein.");
    }

    // Menge berechnen Rezept des Tages
    let rdtmengeButter = zutaten.rdtButter * portionen;
    let rdtmengeZucker = zutaten.rdtZucker * portionen;
    let rdtmengeMehl = zutaten.rdtMehl * portionen;
    let rdtmengeSalz = zutaten.rdtSalz * portionen;
    let rdtmengeHefe = zutaten.rdtHefe * portionen;
    let rdtmengeEier = zutaten.rdtEier * portionen;
    let rdtmengeMilch = zutaten.rdtMilch * portionen;
    rdtmengeMilch = rdtmengeMilch.toFixed(1);

    // Ergebnis anzeigen
    document.getElementById('RdT-Butter').innerHTML = rdtmengeButter + "g Butter";
    document.getElementById('RdT-Zucker').innerHTML = rdtmengeZucker + "g Zucker";
    document.getElementById('RdT-Mehl').innerHTML = rdtmengeMehl + "g Mehl";
    document.getElementById('RdT-Salz').innerHTML = rdtmengeSalz + " Prise(n) Salz";
    document.getElementById('RdT-Hefe').innerHTML = rdtmengeHefe + "g Hefe";
    document.getElementById('RdT-Eier').innerHTML = rdtmengeEier + " Ei(er)";
    document.getElementById('RdT-Milch').innerHTML = rdtmengeMilch + " Liter Milch (ungefähr, je nach Mehl)";
  
}