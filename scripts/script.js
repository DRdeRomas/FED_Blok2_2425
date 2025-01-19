// JavaScript Document
// console.log("hi");

// const searchMenu = document.querySelector("header > ul");
// const openSearch = document.querySelector("nav svg");
// const menuSluitButton = document.querySelector("button.close-menu");

// openSearch.onclick = toggleSearchMenu;
// menuSluitButton.onclick -

 
// function toggleSearchMenu() {
//   if (searchMenu.classList.contains("inBeeld")) {
//     searchMenu.classList.remove("inBeeld");
//   }
//   else {
//     searchMenu.classList.add("inBeeld");
//   }
// }

// // stap 1 - zoek sluiten button op
// const menuSluitButton= document.querySelector("nav button");
 
// // stap 2 - laat die button luisteren naar kliks
// menuSluitButton.onclick = sluitMenu;
 
// // stap 3 - in de functie verwijder de class van de nav
// function sluitMenu(){
//    deNav.classList.remove("toonMenu");
// }


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

// Hetzelfe gold voor het verbergen van de tekst en input //
document.addEventListener('DOMContentLoaded', function () {
    const andersRadio = document.querySelector('input[name="donatie_bedrag"][value="ander"]');
    const otherFields = document.querySelectorAll('#aanpassing_bedrag, main section:nth-of-type(1) p:last-of-type');

    // Function to toggle visibility of "other" fields based on the selected radio button
    function toggleOtherFields() {
        if (andersRadio.checked) {
            otherFields.forEach(field => field.style.display = 'block');
        } else {
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
});

// HAMBURGER MENU
var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}

// HAMBURGER MENU
var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}