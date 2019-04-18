var gameInstance;

function setFullscreen() {
    gameInstance.SetFullscreen(1);
}

const url = new URL(window.location.href);
switch (url.searchParams.get("jamName")) {
    case "larryTheSheepsMuseumInvasion":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/LarryTheSheepsMuseumInvasion/LarryTheSheepsMuseumInvasion.json", {onProgress: UnityProgress});
        });
    break;

    case "kibouNoImouto":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/KibouNoImouto/KibouNoImouto.json", {onProgress: UnityProgress});
        });
    break;

    case "jovialJudgement":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/JovialJudgement/ChristmasJam2018WebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "toFSDfSftPDRRoDwL":
        $.getScript('../Unity/ToFSDfSftPDRRoDwL/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/ToFSDfSftPDRRoDwL/WebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "manchaud":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/Manchaud/TestWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "powerDown":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/PowerDown/PowerDownWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "hadipoRun":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/HadipoRun/HadipoRunWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "talesOfLayinskia":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/TalesOfLayinskia/TalesOfLayinskiaWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "vespias":
        $.getScript('../Unity/TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/Vespias/VespiasWebGL.json", {onProgress: UnityProgress});
        });
    break;

    default:
        console.error("Invalid jam name " + url.searchParams.get("jamName"));
        window.location.href = 'https://zirk.eu/gamejam.html'
}