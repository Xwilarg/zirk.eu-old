google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCommandServs);
google.charts.setOnLoadCallback(drawTotalUsage);

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

function drawTotalUsage() {

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let currentDate = new Date();
            let now = currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1));
            let modules = JSON.parse(this.responseText).message.modules;
            
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
    };
    xmlhttp.open("GET", "https://api.zirk.eu/bots.php?name=Sanara", true);
    xmlhttp.send();
}

function drawCommandServs() {
						
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let values = [];
            let currentDate = new Date();
            for (let i = 0; i < 10; i++) {
                values.push(currentDate.getFullYear().toString().substr(-2) + addZero((currentDate.getMonth() + 1)) + addZero(currentDate.getDate()) + addZero(currentDate.getHours()));
                currentDate.setHours(currentDate.getHours() - 1);
            }
            
            let val = JSON.parse(this.responseText).message.serverModules;

            let arrData = [['Date', 'Anime/Manga', 'Booru', 'Information', 'Doujinshi', 'Game', 'Image', 'Information', 'Kantai Collection',
                'Linguistic', 'Radio', 'Settings', 'Visual Novel', 'Xkcd', 'YouTube']];
            
                for (let i = 9; i >= 0; i--) {
                    arrData.push(['H-' + i,
                    getElement(val, values[i], 'AnimeManga'), getElement(val, values[i], 'Booru'), getElement(val, values[i], 'Communication'), getElement(val, values[i], 'Doujinshi'),
                    getElement(val, values[i], 'Game'),getElement(val, values[i], 'Image'), getElement(val, values[i], 'Information'), getElement(val, values[i], 'KantaiCollection'),
                    getElement(val, values[i], 'Linguistic'), getElement(val, values[i], 'Radio'), getElement(val, values[i], 'Settings'), getElement(val, values[i], 'VisualNovel'), getElement(val, values[i], 'Xkcd'),
                    getElement(val, values[i], 'Youtube')])
                }

            let data = google.visualization.arrayToDataTable(arrData);

            let options = {
                title: 'Module usage'
            };

            let chart = new google.visualization.LineChart(document.getElementById('commandServsChart'));

            chart.draw(data, options);
        }
    };
    xmlhttp.open("GET", "https://api.zirk.eu/bots.php?name=Sanara", true);
    xmlhttp.send();
  }