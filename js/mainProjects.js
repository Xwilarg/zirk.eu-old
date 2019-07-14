let currId = 0;
let projects = [
    ['<a href="https://sanara.zirk.eu">Sanara</a>', "A multipurpose Discord bot providing games, images and more"],
    ['<a href="https://zirk.eu/boorusharp.html">BooruSharp</a>', "A C# library to browse Booru websites (Gelbooru, Konachan, etc...) easily"],
    ['<a href="https://chrome.google.com/webstore/detail/nhentai-downloader/dcpdhacgmnhbfaebkcagkakpcighmeol">NHentaiDownloader</a>', "A chrome extension to download doujinshi from NHentai"]
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