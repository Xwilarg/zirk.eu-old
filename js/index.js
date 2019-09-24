function resetAll() {
    document.getElementById("introPresentation").hidden = true;
    document.getElementById("introCompetences").hidden = true;
    document.getElementById("introHobbies").hidden = true;
}

function loadAboutMe() {
    resetAll();
    document.getElementById("introPresentation").hidden = false;
}

function loadCompetences() {
    resetAll();
    document.getElementById("introCompetences").hidden = false;
}

function loadHobbies() {
    resetAll();
    document.getElementById("introHobbies").hidden = false;
}