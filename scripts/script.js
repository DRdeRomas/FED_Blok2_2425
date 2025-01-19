console.log("Welkom bij ASKV");
// HAMBURGER MENU
// var openButton = document.querySelector("header > button");

// openButton.onclick = openMenu;

// function openMenu() {
//     var deNav = document.querySelector("nav");
//     deNav.classList.add("toonMenu");
// }

// var sluitButton = document.querySelector("nav button");
// sluitButton.onclick = sluitMenu;

// function sluitMenu(){
//     var deNav = document.querySelector("nav");
//     deNav.classList.remove("toonMenu");
// }

// // HAMBURGER MENU
// var openButton = document.querySelector("header > button");

// openButton.onclick = openMenu;

// function openMenu() {
//     var deNav = document.querySelector("nav");
//     deNav.classList.add("toonMenu");
// }

// var sluitButton = document.querySelector("nav button");
// sluitButton.onclick = sluitMenu;

// function sluitMenu(){
//     var deNav = document.querySelector("nav");
//     deNav.classList.remove("toonMenu");
// }
// Hamburger menu (CodePen opdracht)
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu openen
    var openButton = document.querySelector("header > button");

    if (openButton) {
        openButton.onclick = openMenu;
    }

    function openMenu() {
        var deNav = document.querySelector("nav");
        deNav.classList.add("toonMenu");
        console.log("Menu is open");
    }

    // Hamburger menu sluiten
    var sluitButton = document.querySelector("nav button");

    if (sluitButton) {
        sluitButton.onclick = sluitMenu;
    }

    function sluitMenu() {
        var deNav = document.querySelector("nav");
        deNav.classList.remove("toonMenu");
        console.log("Menu is dicht");
    }
});

// Hetzelfe gold voor het verbergen van de tekst en input //
document.addEventListener('DOMContentLoaded', function () {
    const andersRadio = document.querySelector('input[name="donatie_bedrag"][value="ander"]');
    const otherFields = document.querySelectorAll('#aanpassing_bedrag, main section:nth-of-type(1) p:last-of-type');

    // Only proceed if the "anders" radio button is found
    if (andersRadio) {
        // Functie om zichtbaarheid te toggelen van andere opties
        function toggleOtherFields() {
            if (andersRadio.checked) {
                console.log("Anders geselecteerd");
                otherFields.forEach(field => field.style.display = 'block');
            } else {
                console.log("Bedrag optie geselecteerd");
                otherFields.forEach(field => field.style.display = 'none');
            }
        }

        // Add event listener to the radio buttons in the "donatie_bedrag" group
        const donationRadios = document.querySelectorAll('input[name="donatie_bedrag"]');
        donationRadios.forEach(radio => {
            radio.addEventListener('change', toggleOtherFields);
        });

        // Initial check in case "Anders" is pre-selected
        toggleOtherFields();
    }

    // <DETAILS>
    // Het was mij niet gelukt om een "gecombineerde animatie" te maken met CSS en JS.
    // Deze code heb ik met behulp van ChatGPT gemaakt.
    document.querySelectorAll("details").forEach((detail) => {
        detail.addEventListener("toggle", function () {
            if (this.open) {
                document.querySelectorAll("details").forEach((otherDetail) => {
                    if (otherDetail !== this) {
                        otherDetail.open = false;
                    }
                });
            }
        });
    });
});