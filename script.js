const apiKey = "3675b27ab9d7db474c99df9400d26d18";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
async function getWeather(city) {
  try {
    const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }else{
        const data = await response.json();

        // Extracting temperature in Kelvin
        const tempKelvin = data.main.temp;
    
        // Convert Kelvin to Celsius
        const tempCelsius = tempKelvin - 273.15;
    
        // Display the city name and converted temperature on the webpage
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(tempCelsius.toFixed(2))}°C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = 'block';
        document.querySelector(".error").style.display = 'none';
    }
    
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
}
searchBtn.addEventListener('click',()=>{
    getWeather(searchBox.value);
})

getWeather();
