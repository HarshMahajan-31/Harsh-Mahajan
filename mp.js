// Simulated weather database (mock data)
const mockWeatherData = {
  delhi: { temp: 32, weather: "☀️Sunny", humidity: 45 },
  mumbai: { temp: 29, weather: "☁️Cloudy", humidity: 70 },
  london: { temp: 18, weather: "🌧️Rainy", humidity: 80 },
  newyork: { temp: 25, weather: "Clear", humidity: 50 },
  tokyo: { temp: 30, weather: "Humid", humidity: 75 }
};

function getWeather() {
  const city = document.getElementById('cityInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');

  if (city === '') {
    resultDiv.innerHTML = "❗ Please enter a city name.";
    return;
  }

  if (mockWeatherData[city]) {
    const data = mockWeatherData[city];
    resultDiv.innerHTML = `
      <p><strong>City:</strong> ${city.charAt(0).toUpperCase() + city.slice(1)}</p>
      <p><strong>Temperature:</strong> ${data.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather}</p>
      <p><strong>Humidity:</strong> ${data.humidity}%</p>
    `;
  } else {
    resultDiv.innerHTML = "❌ Sorry, weather data not found for that city.";
  }
}