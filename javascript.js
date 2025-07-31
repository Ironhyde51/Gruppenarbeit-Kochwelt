const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('show');
});
// Basedata as Object
let zutaten = {
    spaghetti: 150,  // grams for 1 serving
    garnelen: 125,
    Sahne: 50,
    Tomaten: 50,
    Knoblauch: 1,
    Zwiebel: 1 / 4,
};

function rechneMenge() {
    // portions Input 
    let portionen = document.getElementById('portionen').value;

    // check portions
    if (portionen < 1) {
        portionen = 1;
    } else if (portionen > 8) {
        portionen = 8;
        alert("Bitte gebe einen Wert zwischen 1 und 8 ein.");
    }

    // calc ingredieants
    let mengeSpaghetti = zutaten.spaghetti * portionen;
    let mengeGarnelen = zutaten.garnelen * portionen;
    let mengeSahne = zutaten.Sahne * portionen;
    let mengeTomaten = zutaten.Tomaten * portionen;
    let mengeZwiebel = zutaten.Zwiebel * portionen;
    let mengeKnoblauch = zutaten.Knoblauch * portionen;

    // show result
    document.getElementById('menge-spaghetti').innerHTML = mengeSpaghetti + "g Spaghetti";
    document.getElementById('menge-garnelen').innerHTML = mengeGarnelen + "g Garnelen";
    document.getElementById('menge-sahne').innerHTML = mengeSahne + "ml Sahne";
    document.getElementById('menge-tomaten').innerHTML = mengeTomaten + "ml passierte Tomaten";
    document.getElementById('menge-knoblauch').innerHTML = mengeKnoblauch + " Knoblauchzehe(n)";
    document.getElementById('menge-zwiebel').innerHTML = mengeZwiebel + " Zwiebeln";


    if (mengeZwiebel == 0.25) {
        document.getElementById('menge-zwiebel').innerHTML = "<span style='font-size: 18px;'>¼</span> Zwiebel(n)";
    } else if (mengeZwiebel == 0.5) {
        document.getElementById('menge-zwiebel').innerHTML = "<span style='font-size: 18px;'>½</span> Zwiebel(n)";
    } else if (mengeZwiebel == 0.75) {
        document.getElementById('menge-zwiebel').innerHTML = "<span style='font-size: 18px;'>¾</span> Zwiebel(n)";
    } else if (mengeZwiebel == 1.25) {
        document.getElementById('menge-zwiebel').innerHTML = "<span style='font-size: 18px;'>1¼</span> Zwiebel(n)";
    } else if (mengeZwiebel == 1.5) {
        document.getElementById('menge-zwiebel').innerHTML = "<span style='font-size: 18px;'>1½</span> Zwiebel(n)";
    } else if (mengeZwiebel == 1.75) {
        document.getElementById('menge-zwiebel').innerHTML = "<span style='font-size: 18px;'>1¾</span> Zwiebel(n)";
    } else {
        document.getElementById('menge-zwiebel').innerHTML = mengeZwiebel + " Zwiebel(n)";
    }
}