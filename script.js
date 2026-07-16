// GET PAGES
const homePage = document.getElementById("home");
const defaultPage = document.getElementById("default-page");
const advancedPage = document.getElementById("advanced-page");

// GET BUTTONS
const btn_default = document.querySelector(".btn_default");
const btn_advanced = document.querySelector(".btn_advanced");

// DEFAULT DISPLAY
btn_default.addEventListener("click", () => {
    homePage.classList.add("hidden");
    defaultPage.classList.remove("hidden");
});

// ADVANCED DISPLAY
btn_advanced.addEventListener("click", () => {
    homePage.classList.add("hidden");
    advancedPage.classList.remove("hidden");
});

