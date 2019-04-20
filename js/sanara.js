let response;

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText);

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawCommandServs);
        google.charts.setOnLoadCallback(drawUsesChart);
        google.charts.setOnLoadCallback(drawTotalUsage);
        google.charts.setOnLoadCallback(drawErrors);
        google.charts.setOnLoadCallback(drawServersChart);
        google.charts.setOnLoadCallback(drawGames);
        google.charts.setOnLoadCallback(drawBoorus);
    }
}
xmlhttp.open("GET", "https://api.zirk.eu/bots.php?name=Sanara", true);
xmlhttp.send();

function addZero(nb) {
    return ((nb < 10) ? ('0' + nb) : (nb));
}

function getElementOnce(arr, elem) {
    if (arr == undefined)
        return (0);
    let e1 = arr[elem];
    if (e1 == undefined)
        return (0);
    return (e1);
}

function getElement(arr, elem1, elem2) {
    if (arr == undefined)
        return (0);
    let e1 = arr[elem1];
    if (e1 == undefined)
        return (0);
    let e2 = e1[elem2];
    if (e2 == undefined)
        return (0);
    return (e2);
}

function drawCommandServs() {
    let values = [];
    let currentDate = new Date();
    for (let i = 0; i < 10; i++) {
        values.push(currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1)) + addZero(currentDate.getDate()) + addZero(currentDate.getHours()));
        currentDate.setHours(currentDate.getHours() - 1);
    }

    let val = response.message.serverModules;

    let arrData = [['Date', 'Anime/Manga', 'Booru', 'Information', 'Doujinshi', 'Game', 'Image', 'Information', 'Kantai Collection',
        'Linguistic', 'Radio', 'Settings', 'Visual Novel', 'Xkcd', 'YouTube']];

    for (let i = 9; i >= 0; i--) {
        arrData.push(['H-' + i,
        getElement(val, values[i], 'AnimeManga'), getElement(val, values[i], 'Booru'), getElement(val, values[i], 'Communication'), getElement(val, values[i], 'Doujinshi'),
        getElement(val, values[i], 'Game'),getElement(val, values[i], 'Image'), getElement(val, values[i], 'Information'), getElement(val, values[i], 'KantaiCollection'),
        getElement(val, values[i], 'Linguistic'), getElement(val, values[i], 'Radio'), getElement(val, values[i], 'Settings'), getElement(val, values[i], 'VisualNovel'), getElement(val, values[i], 'Xkcd'),
        getElement(val, values[i], 'Youtube')]);
    }

    let data = google.visualization.arrayToDataTable(arrData);
    let options = {
        title: 'Module usage'
    };
    let chart = new google.visualization.LineChart(document.getElementById('commandServsChart'));
    chart.draw(data, options);
}

function drawUsesChart() {
    let values = [];
    let currentDate = new Date();
    for (let i = 0; i < 10; i++) {
        values.push(currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1)) + addZero(currentDate.getDate()) + addZero(currentDate.getHours()));
        currentDate.setHours(currentDate.getHours() - 1);
    }
            
    let val = response.message.commandServs;
    let arrData = [['Date', 'Nb of guilds']];

    for (let i = 9; i >= 0; i--) {
        arrData.push(['H-' + i, Object.keys(getElementOnce(val, values[i])).length]);
    }

    let data = google.visualization.arrayToDataTable(arrData);
    let options = {
        title: 'Module usage per guilds'
    };
    let chart = new google.visualization.AreaChart(document.getElementById('useschart'));
    chart.draw(data, options);
}

function drawTotalUsage() {
    let currentDate = new Date();
    let now = currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1));
    let modules = response.message.modules;

    let data = google.visualization.arrayToDataTable([
        ['Modules', 'Utilisations'],
        ['Anime/Manga',     	getElement(modules, now, 'AnimeManga')],
        ['Booru',     			getElement(modules, now, 'Booru')],
        ['Communication',   	getElement(modules, now, 'Communication')],
        ['Doujinshi',     		getElement(modules, now, 'Doujinshi')],
        ['Game',      			getElement(modules, now, 'Game')],
        ['Image', 				getElement(modules, now, 'Image')],
        ['Information',   	    getElement(modules, now, 'Information')],
        ['Kantai Collection', 	getElement(modules, now, 'KantaiCollection')],
        ['Linguistic',      	getElement(modules, now, 'Linguistic')],
        ['Radio',      			getElement(modules, now, 'Radio')],
        ['Settings',      		getElement(modules, now, 'Settings')],
        ['Visual Novel',      	getElement(modules, now, 'VisualNovel')],
        ['Xkcd',      			getElement(modules, now, 'Xkcd')],
        ['YouTube',      		getElement(modules, now, 'Youtube')]
    ]);

    let options = {
        title: 'Module usage (monthly)'
    };
    let chart = new google.visualization.PieChart(document.getElementById('moduleschart'));
    chart.draw(data, options);
}

function drawErrors() {
    let currentDate = new Date();
    let now = currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1)) + addZero(currentDate.getDate());
    let errors = response.message.errors[now];

    let array = new Array();
    array.push(new Array());
    array[0].push("Return status");
    array[0].push("Nb of occurance");
    let i = 0;
    for (let key in errors) {
        array.push(new Array());
        array[i + 1].push(key);
        array[i + 1].push(parseInt(errors[key]));
        i++;
    }
    let data = google.visualization.arrayToDataTable(array);

    let options = {
        title: 'Errors encountered (daily)'
    };
    let chart = new google.visualization.PieChart(document.getElementById('errorsChart'));
    chart.draw(data, options);
}

function drawServersChart() {
    let datas = response.message.serversBiggest;

    let data = google.visualization.arrayToDataTable([
        ["Server's name", 'Users', 'Bots'],
        [datas[1][0], parseInt(datas[1][1]), parseInt(datas[1][2])],
        [datas[2][0], parseInt(datas[2][1]), parseInt(datas[2][2])],
        [datas[3][0], parseInt(datas[3][1]), parseInt(datas[3][2])],
        [datas[4][0], parseInt(datas[4][1]), parseInt(datas[4][2])],
        [datas[5][0], parseInt(datas[5][1]), parseInt(datas[5][2])],
    ]);

    let options = {
        title: "Server population (Ignoring 'Discord Bot List' server)",
            isStacked: true,
    };
    let chart = new google.visualization.ColumnChart(document.getElementById('serverschart'));
    chart.draw(data, options);
}

function drawGames() {
    let currentDate = new Date();
    let now = currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1));
    let games = response.message.games[now];

    let array = new Array();
    array.push(new Array());
    array[0].push("Game");
    array[0].push("Nb of occurance");
    let i = 0;
    for (let key in games) {
        array.push(new Array());
        array[i + 1].push(key.charAt(0).toUpperCase() + key.substr(1));
        array[i + 1].push(parseInt(games[key]));
        i++;
    }
    let data = google.visualization.arrayToDataTable(array);

    let options = {
        title: 'Games played (monthly)'
    };
    let chart = new google.visualization.PieChart(document.getElementById('gameschart'));
    chart.draw(data, options);
}

function drawBoorus() {
    let currentDate = new Date();
    let now = currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1));
    let games = response.message.booru[now];

    let array = new Array();
    array.push(new Array());
    array[0].push("Booru");
    array[0].push("Nb of occurance");
    let i = 0;
    for (let key in games) {
        array.push(new Array());
        array[i + 1].push(key.charAt(0).toUpperCase() + key.substr(1));
        array[i + 1].push(parseInt(games[key]));
        i++;
    }
    let data = google.visualization.arrayToDataTable(array);

    let options = {
        title: 'Booru used (monthly)'
    };
    let chart = new google.visualization.PieChart(document.getElementById('booruChart'));
    chart.draw(data, options);
}