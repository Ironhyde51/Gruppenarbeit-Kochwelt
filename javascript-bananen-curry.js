const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('show');
});
// Basisdaten als Objekt
let zutaten = {
    schnitzel: 1,  
    paprika: 0.5,
    zwiebel: 0.25,
    cocos: 100,
    banana: 0.75,
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

    // Menge berechnen
    let mengeSchnitzel = zutaten.schnitzel * portionen;
    let mengePaprika = zutaten.paprika * portionen;
    let mengeZwiebel = zutaten.zwiebel * portionen; 
    let mengeCocos = zutaten.cocos * portionen;
    let mengeBanana = zutaten.banana * portionen;
   
    // Ergebnis anzeigen
    document.getElementById('schnitzel').innerHTML = mengeSchnitzel + " Schweineschnitzel";
    document.getElementById('paprika').innerHTML = mengePaprika + " Paprikaschote(n), Farbe nach Wahl";
    document.getElementById('zwiebel').innerHTML = mengeZwiebel + " große Zwiebel(n)";
    document.getElementById('cocos').innerHTML = mengeCocos + " ml Kokosmilch";
    document.getElementById('banana').innerHTML = mengeBanana + " Banane(n)";
    

    if (mengePaprika == 0.5) {
        document.getElementById('paprika').innerHTML = "<span style='font-size: 18px;'>½</span> Paprikaschote(n), Farbe nach Wahl";
    } else if (mengePaprika == 1.5) {
        document.getElementById('paprika').innerHTML = "<span style='font-size: 18px;'>1½</span> Paprikaschote(n), Farbe nach Wahl";
    } else if (mengePaprika == 2.5) {
        document.getElementById('paprika').innerHTML = "<span style='font-size: 18px;'>2½</span> Paprikaschote(n), Farbe nach Wahl";
    } else if (mengePaprika == 3.5) {
        document.getElementById('paprika').innerHTML = "<span style='font-size: 18px;'>3½</span> Paprikaschote(n), Farbe nach Wahl";
    } else {
        document.getElementById('paprika').innerHTML = mengePaprika + " Paprikaschote(n), Farbe nach Wahl";
    }


    if (mengeZwiebel == 0.25) {
        document.getElementById('zwiebel').innerHTML = "<span style='font-size: 18px;'>¼</span> große Zwiebel(n)";
    } else if (mengeZwiebel == 0.5) {
        document.getElementById('zwiebel').innerHTML = "<span style='font-size: 18px;'>½</span> große Zwiebel(n)";
    } else if (mengeZwiebel == 0.75) {
        document.getElementById('zwiebel').innerHTML = "<span style='font-size: 18px;'>¾</span> große Zwiebel(n)";
    } else if (mengeZwiebel == 1.25) {
        document.getElementById('zwiebel').innerHTML = "<span style='font-size: 18px;'>1¼</span> große Zwiebel(n)";
    } else if (mengeZwiebel == 1.5) {
        document.getElementById('zwiebel').innerHTML = "<span style='font-size: 18px;'>1½</span> große Zwiebel(n)";
    } else if (mengeZwiebel == 1.75) {
        document.getElementById('zwiebel').innerHTML = "<span style='font-size: 18px;'>1¾</span> große Zwiebel(n)";
    } else {
        document.getElementById('zwiebel').innerHTML = mengeZwiebel + " große Zwiebel(n)";
    }

    if (mengeBanana == 0.75) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>¾</span> Banane(n)";
    } else if (mengeBanana == 1.5) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>1½</span> Banane(n)";
    } else if (mengeBanana == 2.25) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>2¼</span> Banane(n)";
    } else if (mengeBanana == 3.75) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>3¾</span> Banane(n)";
    } else if (mengeBanana == 4.5) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>4½</span> Banane(n)";
    } else if (mengeBanana == 5.25) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>5¼</span> Banane(n)";
    } else {
        document.getElementById('banana').innerHTML = mengeBanana + " Banane(n)";
    }

    
}