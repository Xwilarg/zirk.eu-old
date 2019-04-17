function updateDescription(name, jamName, jamTheme, jamStart, jamDuration, githubLink, projectLink, postModifications, teamSize) {
    document.getElementById('sidenavGamejam').innerHTML = '<h3>' + name + '</h3>'
    + '<br/><br/>' + jamName + '\nTheme: ' + jamTheme + '<br/><br/>'
    + jamStart + ' (' + jamDuration + ')'
    + ((githubLink === "None") ? ("") : ('<br/><br/><a href="' + githubLink + '">GitHub</a>'))
    + ((projectLink === "None") ? ("") : ('<br/><br/><a href="' + projectLink + '">Project page</a>'))
    + "<br/><hr><br/>Post gamejam modifications:<br/>" + postModifications
    + "<br/><br/>Team size:<br/>" + teamSize;
}