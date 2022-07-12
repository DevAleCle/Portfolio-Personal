const mobileMenuContainer = document.getElementById("nav-mobile-container");

const btnMenu = document.getElementById("icon-menu");
const btnCloseMenu = document.getElementById("icon-close-menu");

const btnAboutMe = document.getElementById("navMob-aboutMe");
const btnSkills = document.getElementById("navMob-skills");
const btnHobbies = document.getElementById("navMob-hobbies");
const btnKnowledge = document.getElementById("navMob-knowledge");
const btnProyects = document.getElementById("navMob-proyects");
const btnContactMe = document.getElementById("navMob-contactMe");

btnCloseMenu.classList.add("invisible");
mobileMenuContainer.classList.add("invisible");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.add("invisible");
    if (btnCloseMenu.classList.contains("invisible")) {
        btnCloseMenu.classList.remove("invisible");
    }
    if (mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.remove("invisible");
    }
});

btnCloseMenu.addEventListener("click", () => {
    btnCloseMenu.classList.add("invisible");
    if (btnMenu.classList.contains("invisible")) {
        btnMenu.classList.remove("invisible");
    }
    if (!mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.add("invisible");
    }
});

btnAboutMe.addEventListener("click", () => {
    btnCloseMenu.classList.add("invisible");
    if (btnMenu.classList.contains("invisible")) {
        btnMenu.classList.remove("invisible");
    }
    if (!mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.add("invisible");
    }
});

btnSkills.addEventListener("click", () => {
    btnCloseMenu.classList.add("invisible");
    if (btnMenu.classList.contains("invisible")) {
        btnMenu.classList.remove("invisible");
    }
    if (!mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.add("invisible");
    }
});

btnHobbies.addEventListener("click", () => {
    btnCloseMenu.classList.add("invisible");
    if (btnMenu.classList.contains("invisible")) {
        btnMenu.classList.remove("invisible");
    }
    if (!mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.add("invisible");
    }
});

btnKnowledge.addEventListener("click", () => {
    btnCloseMenu.classList.add("invisible");
    if (btnMenu.classList.contains("invisible")) {
        btnMenu.classList.remove("invisible");
    }
    if (!mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.add("invisible");
    }
});

btnProyects.addEventListener("click", () => {
    btnCloseMenu.classList.add("invisible");
    if (btnMenu.classList.contains("invisible")) {
        btnMenu.classList.remove("invisible");
    }
    if (!mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.add("invisible");
    }
});

btnContactMe.addEventListener("click", () => {
    btnCloseMenu.classList.add("invisible");
    if (btnMenu.classList.contains("invisible")) {
        btnMenu.classList.remove("invisible");
    }
    if (!mobileMenuContainer.classList.contains("invisible")) {
        mobileMenuContainer.classList.add("invisible");
    }
});
