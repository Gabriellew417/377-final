// using log and lat to get main data

async function firstcall(){
    // UMD College Park Coordinates
    const latitude = 38.9897
    const longitude = -76.9378
    const request = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
    const respond = await request.json();
    // get city
    const city = respond.properties.relativeLocation.properties.city
    // url for forecast data
    const forecastdata = respond.properties.forecast
    //console.log([city, forecastdata])
    //console.log('data:', forcastdata)
    return [city, forecastdata]

}

// get the forecast url from the main data update the HTML page

async function abc(){
    const a = await firstcall();
    //console.log('x', x)
    //// GET DATA FOR CURRENT DAY ///

    const b = await fetch(a[1]);
    const c = await b.json();
    const d = c.properties.periods[0]
    //console.log(d)
    // location
    const location = document.getElementById('location')
    location.innerHTML = a[0]
    // current temp
    const ctemp = document.getElementById('ctemp');
    ctemp.innerHTML =  `${d.temperature} Degrees Fahrenheit`;
    // wind speed
    const wspeed = document.getElementById('wspeed')
    wspeed.innerHTML = d.windSpeed
    // wind direction
    const wdirection = document.getElementById('wdirection')
    wdirection.innerHTML = d.windDirection
    // short forecast
    const sforecast = document.getElementById('sforecast')
    sforecast.innerHTML = d.shortForecast
    // detail forecast
    const dforecast = document.getElementById('dforcast')
    dforecast.innerHTML = d.detailedForecast
    
    ///////// CHART CODE ////////////

    const e = c.properties.periods.map((x) => x)
    
    var temps = [], dayzz = []
    const dayz = c.properties.periods.map((x) => x.name)
    //console.log(dayz)
    dayzz = dayz

    tempnum = c.properties.periods.map((x) => x.temperature)
    //console.log(tempnum)
    temps = tempnum
    const ctx = document.getElementById('myChart').getContext('2d'); // 2d context
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: dayzz,
        datasets: [{ 
            label: "Temp Comparison",
            borderColor: "#3e95cd",
            data: temps,
            fill: false
            }
        ]
        },
        options: {
        title: {
            display: true,
            text: 'Stock Price'
        }
        }
    });

    //console.log(d)

    //////////  TABLE CODE   /////////

    c.properties.periods.forEach(element => {
        //console.log(element)
        
        tr = document.createElement('tr');
        dayscol = document.createElement('td');
        degreecol = document.createElement('td');
        shtforecast = document.createElement('td')
        dayscol.innerHTML = element.name;
        degreecol.innerHTML = element.temperature;
        shtforecast.innerHTML = element.shortForecast;
        

        /*
        x = element.sentiment;
        if (x == 'Bullish') {
            sentiment.innerHTML = '<i class="fa-solid fa-arrow-trend-up"></i>'
        } else {
          sentiment.innerHTML = '<i class="fa-solid fa-arrow-trend-down"></i>'
        }
        */

        tr.appendChild(dayscol);
        tr.appendChild(degreecol);
        tr.appendChild(shtforecast)
        mainTable.appendChild(tr);

    })
    }
/*
Sky Condition
--------------
Clear/Sunny
Mostly Clear/Mostly
Partly Cloudy/Partly Sunny
Mostly Cloud
Cloudy
*/

window.onload = abc;
