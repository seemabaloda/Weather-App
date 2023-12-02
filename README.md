# Weather App

This Weather App retrieves weather information based on the city name entered by the user. It uses the OpenWeatherMap API to fetch current weather data.

## Features

- **Search by City:** Enter the name of a city to fetch its current weather information.
- **Default City:** If no city name is entered, the app defaults to displaying weather information for Goa.
- **Temperature Display:** Displays temperature in both Celsius and Fahrenheit.
- **Additional Weather Details:** Shows humidity and wind speed.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To run this application locally:

1. Clone this repository:

    ```bash
    git clone <repository_url>
    ```

2. Open `index.html` in your web browser.

## Usage

1. Enter the name of a city in the search input.
2. Click the search button or press Enter to fetch the weather information for the entered city.
3. The app will display the city name, temperature, humidity, and wind speed.
4. If no city name is entered, the default weather information for Goa will be displayed.

## API Usage

This app uses the OpenWeatherMap API to fetch weather data. You'll need to provide your own API key in the `script.js` file:

```javascript
const apiKey = "YOUR_API_KEY";
