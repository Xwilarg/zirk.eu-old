let currId = 0;
let projects = [
    ['<a href="https://sanara.zirk.eu">Sanara</a>', "A multipurpose Discord bot providing games, images and more", "img/Slideshow-Sanara.gif", "https://github.com/Xwilarg/Sanara"],
    ['<a href="https://github.com/Xwilarg/BooruSharp">BooruSharp</a>', "A C# library to browse Booru websites (Gelbooru, Konachan, etc...) easily", "img/Slideshow-BooruSharp.gif", "https://github.com/Xwilarg/BooruSharp"],
    ['<a href="http://nhentaidownloader.zirk.eu">NHentai Downloader</a>', "A chrome extension to download doujinshi from NHentai", "img/Slideshow-NHentaiDownloader.gif", "https://github.com/Xwilarg/NHentaiDownloader"]
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
    document.getElementById("slideBackground").src = projects[currId][2];
    document.getElementById("slideGithub").href = projects[currId][3];
}

displayProject();