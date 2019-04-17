var gameInstance;

function setFullscreen() {
    gameInstance.SetFullscreen(1);
}

var url = new URL(window.location.href);
switch (url.searchParams.get("jamName")) {
    case "larryTheSheepsMuseumInvasion":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/LarryTheSheepsMuseumInvasion/LarryTheSheepsMuseumInvasion.json", {onProgress: UnityProgress});
    break;

    case "kibouNoImouto":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/KibouNoImouto/KibouNoImouto.json", {onProgress: UnityProgress});
    break;

    case "jovialJudgement":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/JovialJudgement/ChristmasJam2018WebGL.json", {onProgress: UnityProgress});
    break;

    case "toFSDfSftPDRRoDwL":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/ToFSDfSftPDRRoDwL/WebGL.json", {onProgress: UnityProgress});
    break;

    case "manchaud":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/Manchaud/TestWebGL.json", {onProgress: UnityProgress});
    break;

    case "powerDown":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/PowerDown/PowerDownWebGL.json", {onProgress: UnityProgress});
    break;

    case "hadipoRun":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/HadipoRun/HadipoRunWebGL.json", {onProgress: UnityProgress});
    break;

    case "talesOfLayinskia":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/TalesOfLayinskia/TalesOfLayinskiaWebGL.json", {onProgress: UnityProgress});
    break;

    case "vespias":
        gameInstance = UnityLoader.instantiate("gameContainer", "../Unity/Vespias/VespiasWebGL.json", {onProgress: UnityProgress});
    break;

    default:
        console.error("Invalid jam name " + url.searchParams.get("jamName"));
}