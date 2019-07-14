let currId = 0;
let projects = [
    ["Title", "Description"],
    ["Title 2", "Description 2"]
];

function nextProject() {
    currId++;
    if (currId == projects.length)
        currId = 0;
    displayProject();
}

function previousProject() {
    currId--;
    if (currId == -1)
        currId = projects.length - 1;
    displayProject();
}

function displayProject() {
    document.getElementById("slideTitle").innerHTML = projects[currId][0];
    document.getElementById("slideDescription").innerHTML = projects[currId][1];
}

displayProject();