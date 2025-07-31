const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
});

//  Base data per portion — all values in g, ml, or cl
const zutaten = {
    rrSchweineschnitzel: 150,       // g
    rrKnoblauch: 4,                 // g (1 Zehe ≈ 4g)
    rrZwiebeln: 50,                 // g (½ Zwiebel ≈ 50g)
    rrZitronensaft: 7,              // ml (½ EL ≈ 7ml)
    rrMajoran: 0.8,                 // g (¾ TL ≈ 0.8g)
    rrThymian: 0.5,                 // g (½ TL ≈ 0.5g)
    rrPaprikapulver: 1.5,           // g (¾ TL ≈ 1.5g)
    rrKreuzkümmel: 0.5,             // g (¼ TL ≈ 0.5g)
    rrOlivenöl: 1.5                 // cl
};

// Helper function to display values
function zeigeZutat(id, menge, einheit) {
    const wert = menge.toFixed(1).replace('.', ',');
    document.getElementById(id).innerHTML = `${wert} ${einheit}`;
}

// Main function to calculate based on servings
function rechneMenge() {
    let portionen = parseInt(document.getElementById('portionen').value);

    if (portionen < 1) {
        portionen = 1;
        alert("Bitte gib einen Wert zwischen 1 und 8 ein.");
    } else if (portionen > 8) {
        portionen = 8;
        alert("Bitte gib einen Wert zwischen 1 und 8 ein.");
    }

    zeigeZutat('rr-Schweineschnitzel', zutaten.rrSchweineschnitzel * portionen, "g Schweineschnitzel");
    zeigeZutat('rr-Knoblauch', zutaten.rrKnoblauch * portionen, "g Knoblauch");
    zeigeZutat('rr-Zwiebeln', zutaten.rrZwiebeln * portionen, "g Zwiebel");
    zeigeZutat('rr-Zitronensaft', zutaten.rrZitronensaft * portionen, "ml Zitronensaft");
    zeigeZutat('rr-Majoran', zutaten.rrMajoran * portionen, "g Majoran");
    zeigeZutat('rr-Thymian', zutaten.rrThymian * portionen, "g Thymian");
    zeigeZutat('rr-Paprikapulver', zutaten.rrPaprikapulver * portionen, "g Paprikapulver");
    zeigeZutat('rr-Kreuzkümmel', zutaten.rrKreuzkümmel * portionen, "g Kreuzkümmel");
    zeigeZutat('rr-Olivenöl', zutaten.rrOlivenöl * portionen, "cl Olivenöl");
}
