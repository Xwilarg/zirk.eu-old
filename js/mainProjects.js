function projectPreview(name) {

}

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText);
        document.getElementById("sanaraServers").innerHTML = response.serverCount;
    }
}
xmlhttp.open("GET", "https://api.zirk.eu/bots.php?name=Sanara&small=true", true);
xmlhttp.send();