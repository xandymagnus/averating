const homePage = document.getElementById("home");
const defaultPage = document.getElementById("default-page");
const advancedPage = document.getElementById("advanced-page");

const btn_default = document.querySelector(".btn_default");
const btn_advanced = document.querySelector(".btn_advanced");

btn_default.addEventListener("click", () => {
    homePage.classList.add("hidden");
    defaultPage.classList.remove("hidden");
});

btn_advanced.addEventListener("click", () => {
    homePage.classList.add("hidden");
    advancedPage.classList.remove("hidden");
});

