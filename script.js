// GET PAGES
const homePage = document.getElementById("home");
const defaultPage = document.getElementById("default-page");
const advancedPage = document.getElementById("advanced-page");
let currentPage = homePage;

// GET BUTTONS
const btnDefault = document.querySelector(".btn-default");
const btnAdvanced = document.querySelector(".btn-advanced");

const btnCalculate = document.querySelector(".btn-calculator");
const btnBack = document.querySelectorAll(".btn-back");
// GET INPUTS

// DEFAULT DISPLAY
btnDefault.addEventListener("click", () => {
    homePage.classList.toggle("hidden");
    defaultPage.classList.toggle("hidden");
    currentPage = defaultPage;
});

// ADVANCED DISPLAY
btnAdvanced.addEventListener("click", () => {
    homePage.classList.toggle("hidden");
    advancedPage.classList.toggle("hidden");
    currentPage = advancedPage;
});

// BUTTON BACK
[...btnBack].forEach(btn => {
    btn.addEventListener("click", () => {
        currentPage.classList.toggle("hidden");
        homePage.classList.toggle("hidden");
    });
});