function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '5cb3ccf7667d45babf451482f14ab623';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao obter os dados da API');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

function displayWeather(data) {
    const weatherDesc = data.weather[0].description;
    const temperature = data.main.temp;

    document.getElementById('weather-desc').innerText = `Condição: ${weatherDesc}`;
    document.getElementById('temperature').innerText = `Temperatura: ${temperature}°C`;
}
