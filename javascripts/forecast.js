//Icon codes: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

/*
    Este arreglo contendrá varios objetos, cada uno representando un día 
    de pronóstico del clima con información detallada como fecha, temperatura, 
    viento, humedad, ícono y descripción (date, temperature, wind, humidity, icon y description).
*/
let daysForecast = [
    {
        date: '2023-06-20',
        temperature: '17.64 °C',
        wind: "0.73 M/S",
        humidity: "70%",
        icon: "https://openweathermap.org/img/wn/02d@4x.png",
        description: 'few clouds'
    },
    {
        date: '2023-06-21',
        temperature: '18.78 °C',
        wind: "2.72 M/S",
        humidity: "83%",
        icon: "https://openweathermap.org/img/wn/01d@4x.png",
        description: 'clear sky'
    },
    {
        date: '2023-06-22',
        temperature: '18.20 °C',
        wind: "1.49 M/S",
        humidity: "72%",
        icon: "https://openweathermap.org/img/wn/11d@4x.png",
        description: 'thunderstorm'
    },
    {
        date: '2023-06-23',
        temperature: '17.08 °C',
        wind: "0.9 M/S",
        humidity: "89%",
        icon: "https://openweathermap.org/img/wn/10d@4x.png",
        description: 'rain'
    },
    {
        date: '2023-06-24',
        temperature: '15.08 °C',
        wind: "1.2 M/S",
        humidity: "95%",
        icon: "https://openweathermap.org/img/wn/13d@4x.png",
        description: 'snow'
    }
]

/*
    Implemente la función flecha weatherForecast, que:
    
    1.- Obtenga la referencia al primer elemento con la clase (getElementsByClassName) "weather-cards" en el documento. 
    2.- Borre el contenido del elemento en (1) 

    3.- Itere el arreglo daysForecast
        3.1.- Desestructure los propiedades date, temperature, wind, humidity, icon y description 
              del elemento actual en el recorrido
        3.2.- Complete la plantilla literal (template) con las propiedades en el 
              siguiente orden: date, icon, description, temperature, wind y humidity.

                let template = `
                <li class="card">
                    <h3>${ }</h3>
                    <img src="${ }" alt="${ }">
                    <h6>Temp: ${ }</h6>
                    <h6>Wind: ${wind}</h6>
                    <h6>Humidity: ${ }</h6>
                </li>`

        3.3.- Agregue la plantilla literal de (3.2) como HTML (innerHTML) del objeto en (1) 
*/

    const weatherForecast = () => {
        weatherCards = document.getElementsByClassName("weather-cards");
        weatherCards[0].innerHTML = "";
        console.log(weatherCards);
        for (const dF of daysForecast) {
            let date = dF['date'];
            let temperature = dF['temperature'];
            let wind = dF['wind'];
            let humidity = dF['humidity'];
            let icon = dF['icon'];
            let description = dF['description'];
            weatherCards[0].innerHTML += `
                <li class="card">
                    <h3>${date}</h3>
                    <img src="${icon}" alt="${description}">
                    <h6>Temp: ${temperature}</h6>
                    <h6>Wind: ${wind}</h6>
                    <h6>Humidity: ${humidity}</h6>
                </li>`
        }

    }
/* 
    Llame a la función flecha weatherForecast.
*/
    weatherForecast();
