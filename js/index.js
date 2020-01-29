let url = new URL(window.location.href);
if (url.searchParams.get("s") === "1")
{
    let elems = document.getElementsByClassName("nsfw");
    for (let i = 0; i < elems.length; i++)
    {
        elems[i].hidden = true;
    }
}