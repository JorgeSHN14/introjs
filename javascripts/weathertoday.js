//Icon codes: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

/*
    Este objeto contendrá la información del clima, incluyendo el nombre 
    de la ciudad, la fecha, la temperatura, la velocidad del viento, la humedad, 
    el ícono del clima y la descripción del clima 
    (name, date, temperature, wind, humidity, icon y description).
*/

let weatherData = {
    name: 'London',
    date: '2023-06-19',
    conditions: {
        temperature: "18.71°C",
        wind: "4.31 M/S",
        humidity: "76%",
    },
    icon: "https://openweathermap.org/img/wn/10d@4x.png",
    description: "Moderate rain"
}

/*
    Implemente la función flecha weatherToday, que:

    1.- Extraiga los valores de los propiedades name y date del objeto weatherData
    2.- Construya una cadena de texto a partir de los valores de (1), 
        cuyo formato es: "#name# (#date#)"
    3.- Obtenga la referencia al primer elemento (getElementsByTagName) h2 del documento
    4.- Asigne la cadena de texto de (2) como texto (innerText) del objeto en (3)

    5.- Extraiga los valores del propiedad conditions del objeto weatherData
    6.- Construya cadenas de texto a partir de los valores de (5),
        cuyos formatos son:
        "Temperature: #temperature#"
        "Wind: #wind#"
        "Humidity: #humidity#"
    7.- Obtenga la referencia a los 3 primeros elementos h6 del documento
    8.- Asigne las cadenas de texto de (6) como texto en los objetos correspondientes de (7)

    9.- Extraiga el valor del propiedad icon del objeto weatherData
    10.- Obtenga la referencia al elemento con el id (getElementById) "icon-description"
    11.- Asigne el valor de (9) como valor (setAttribute) del propiedad src de (10)

    12.- Extraiga el valor del propiedad description del objeto weatherData
    13.- Obtenga la referencia al cuarto elemento h6 del documento
    14.- Asigne el valor de (12) como texto del objeto en (13)
*/
    const weatherToday = () => {
        let name = weatherData["name"];
        let date = weatherData["date"];
        let nameDateStr = `${name} (${date})`;
        let firstH2 = document.getElementsByTagName("h2")[0];
        firstH2.innerText = nameDateStr;
        let temperature = weatherData["conditions"]["temperature"];
        let wind = weatherData["conditions"]["wind"];
        let humidity = weatherData["conditions"]["humidity"];
        let temperatureStr = `Temperature: ${temperature}`;
        let windStr = `Wind: ${wind}`;
        let humidityStr = `Humidity: ${humidity}`;
        let elementsH6 = document.getElementsByTagName("h6");
        let firstH6 = elementsH6[0];
        let secondH6 = elementsH6[1];
        let thirdH6 = elementsH6[2];
        firstH6.innerText = temperatureStr;
        secondH6.innerText = windStr;
        thirdH6.innerText = humidityStr;
        let icon = weatherData["icon"];
        let iconDescription = document.getElementById("icon-description");
        iconDescription.setAttribute("src",icon);
        let description = weatherData["description"];
        let fourthH6 = elementsH6[3];
        fourthH6.innerText = description;
    }

/* 
    Llame a la función flecha weatherToday.
*/
    weatherToday();