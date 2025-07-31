const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('show');
});
// Basedata as Object
let components = {
    cutlet: 1,  
    pepper: 0.5,
    onion: 0.25,
    cocos: 100,
    banana: 0.75,
    };

function rechneMenge() {
    // portions Input 
    let portions = document.getElementById('portions').value;

    // check portions 
    if (portions < 1) {
        portions = 1;
    } else if (portions > 8) {
        portions = 8;
        alert("Bitte gebe einen Wert zwischen 1 und 8 ein.");
    }

    // calc ingredieants 
    let amountCutlet = components.cutlet * portions;
    let amountPepper = components.pepper * portions;
    let amountOnion = components.onion * portions; 
    let amountCocos = components.cocos * portions;
    let amountBanana = components.banana * portions;
   
    // show the result
    document.getElementById('cutlet').innerHTML = amountCutlet + " Schweineschnitzel";
    document.getElementById('pepper').innerHTML = amountPepper + " Paprikaschote(n), Farbe nach Wahl";
    document.getElementById('onion').innerHTML = amountOnion + " große Zwiebel(n)";
    document.getElementById('cocos').innerHTML = amountCocos + " ml Kokosmilch";
    document.getElementById('banana').innerHTML = amountBanana + " Banane(n)";
    

    if (amountPepper == 0.5) {
        document.getElementById('pepper').innerHTML = "<span style='font-size: 18px;'>½</span> Paprikaschote(n), Farbe nach Wahl";
    } else if (amountPepper == 1.5) {
        document.getElementById('pepper').innerHTML = "<span style='font-size: 18px;'>1½</span> Paprikaschote(n), Farbe nach Wahl";
    } else if (amountPepper == 2.5) {
        document.getElementById('pepper').innerHTML = "<span style='font-size: 18px;'>2½</span> Paprikaschote(n), Farbe nach Wahl";
    } else if (amountPepper == 3.5) {
        document.getElementById('pepper').innerHTML = "<span style='font-size: 18px;'>3½</span> Paprikaschote(n), Farbe nach Wahl";
    } else {
        document.getElementById('pepper').innerHTML = amountPepper + " Paprikaschote(n), Farbe nach Wahl";
    }


    if (amountOnion == 0.25) {
        document.getElementById('onion').innerHTML = "<span style='font-size: 18px;'>¼</span> große Zwiebel(n)";
    } else if (amountOnion == 0.5) {
        document.getElementById('onion').innerHTML = "<span style='font-size: 18px;'>½</span> große Zwiebel(n)";
    } else if (amountOnion == 0.75) {
        document.getElementById('onion').innerHTML = "<span style='font-size: 18px;'>¾</span> große Zwiebel(n)";
    } else if (amountOnion == 1.25) {
        document.getElementById('onion').innerHTML = "<span style='font-size: 18px;'>1¼</span> große Zwiebel(n)";
    } else if (amountOnion == 1.5) {
        document.getElementById('onion').innerHTML = "<span style='font-size: 18px;'>1½</span> große Zwiebel(n)";
    } else if (amountOnion == 1.75) {
        document.getElementById('onion').innerHTML = "<span style='font-size: 18px;'>1¾</span> große Zwiebel(n)";
    } else {
        document.getElementById('onion').innerHTML = amountOnion + " große Zwiebel(n)";
    }

    if (amountBanana == 0.75) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>¾</span> Banane(n)";
    } else if (amountBanana == 1.5) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>1½</span> Banane(n)";
    } else if (amountBanana == 2.25) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>2¼</span> Banane(n)";
    } else if (amountBanana == 3.75) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>3¾</span> Banane(n)";
    } else if (amountBanana == 4.5) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>4½</span> Banane(n)";
    } else if (amountBanana == 5.25) {
        document.getElementById('banana').innerHTML = "<span style='font-size: 18px;'>5¼</span> Banane(n)";
    } else {
        document.getElementById('banana').innerHTML = amountBanana + " Banane(n)";
    }

    
}