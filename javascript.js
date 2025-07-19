const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('show');
});

function dezimalZuBruch(zahl) {
    const ganze = Math.floor(zahl);
    const rest = +(zahl - ganze).toFixed(2);

    const brueche = {
        0.2: "⅕",
        0.25: "¼",
        0.33: "⅓",
        0.4: "⅖",
        0.5: "½",
        0.6: "⅗",
        0.66: "⅔",
        0.75: "¾",
        0.8: "⅘"
    };

    let bruch = "";
    for (let dez in brueche) {
        if (Math.abs(rest - dez) < 0.05) {
            bruch = brueche[dez];
            break;
        }
    }

    if (ganze === 0 && bruch !== "") return bruch;
    if (bruch !== "") return `${ganze} ${bruch}`;
    return zahl % 1 === 0 ? ganze : zahl.toFixed(1); // Fallback
}



document.addEventListener("DOMContentLoaded", function () {
    const portionInput = document.getElementById("portionen");
    const portionButton = document.querySelector(".portionen_button");
    const zutaten = document.querySelectorAll(".td-left");

    const originalMengen = [];

    // Ursprüngliche Mengen speichern
    zutaten.forEach((zutat) => {
        const base = zutat.getAttribute("data-base");
        if (base) {
            originalMengen.push({
                element: zutat,
            base: parseFloat(base),
            einheit: zutat.getAttribute("data-einheit") || "",
            name: zutat.getAttribute("data-name") || ""
            });
        }
    });

    portionButton.addEventListener("click", function () {
        const portionen = parseFloat(portionInput.value);
        if (!portionen || portionen < 1 || portionen > 8) {
            alert("Bitte gib eine Anzahl zwischen 1 und 8 Portionen ein.");
            return;
        }
        

        originalMengen.forEach((item) => {
            let berechnet = item.base * portionen;
            let neueMenge = dezimalZuBruch(berechnet);
            item.element.textContent = `${neueMenge}${item.einheit} ${item.name}`.trim();
        });
    });
    portionButton.click();
});