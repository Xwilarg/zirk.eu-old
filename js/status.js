google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function getInt(val) {
    return ((val == undefined) ? (0) : (val));
}

function addZero(nb) {
    return ((nb < 10) ? ('0' + nb) : (nb));
}

function updateChart(valSanara, valLania, valPina) {
    let values = [];
    let currentDate = new Date();
    for (let i = 0; i < 10; i++) {
        values.push(currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1)) + addZero(currentDate.getDate()) + addZero(currentDate.getHours()));
        currentDate.setHours(currentDate.getHours() - 1);
    }

    let arrData = [['Date', 'Sanara', 'Lania', 'Pina']];

    for (let i = 9; i >= 0; i--) {
        arrData.push(['H-' + i, getInt(valSanara[values[i]]), getInt(valLania[values[i]]), getInt(valPina[values[i]])]);
    }
    var data = google.visualization.arrayToDataTable(arrData);

    var options = {
        title: 'Messages per hours (Updated every minutes)',
        curveType: 'none',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('messagesChart'));
    chart.draw(data, options);
}

function drawChart() {

    var valSanara = [];
    var valLania = [];
    var valPina = [];

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            valSanara = JSON.parse(this.responseText).message.nbMsgs;
            updateChart(valSanara, valLania, valPina);
        }
    };
    xmlhttp.open("GET", "https://api.zirk.eu/bots.php?name=Sanara", true);
    xmlhttp.send();

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            valLania = JSON.parse(this.responseText).message.nbMsgs;
            updateChart(valSanara, valLania, valPina);
        }
    };
    xmlhttp2.open("GET", "https://api.zirk.eu/bots.php?name=Lania", true);
    xmlhttp2.send();

    var xmlhttp3 = new XMLHttpRequest();
    xmlhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            valPina = JSON.parse(this.responseText).message.nbMsgs;
            updateChart(valSanara, valLania, valPina);
        }
    };
    xmlhttp3.open("GET", "https://api.zirk.eu/bots.php?name=Pina", true);
    xmlhttp3.send();
}