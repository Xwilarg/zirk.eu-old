let url = new URL(window.location.href);
if (url.searchParams.get("s") === "1")
{
    let elems = document.getElementsByClassName("nsfw");
    for (let i = 0; i < elems.length; i++)
    {
        elems[i].hidden = true;
    }
}

document.getElementById("moreButton").addEventListener("click", function() {
    let more = document.getElementById("moreContent");
    if (more.hidden)
    {
        more.hidden = false;
        document.getElementById("moreButton").innerHTML = "Less";
    }
    else
    {
        more.hidden = true;
        document.getElementById("moreButton").innerHTML = "More";
    }
});