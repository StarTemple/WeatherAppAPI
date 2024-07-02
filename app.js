const express = require('express');
const axios = require('axios');
const app = express();

// Replace 'YOUR_API_KEY' with your actual WeatherAPI.com API key
const API_KEY = '73feb7469fe54b06aa443333240207';

// Endpoint to get weather information for a specific city
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ message: 'City parameter is required' });
    }

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        const weatherData = response.data;

        const weatherInfo = {
            city: weatherData.location.name,
            temperature: weatherData.current.temp_c,
            condition: weatherData.current.condition.text,
            humidity: weatherData.current.humidity,
            wind_speed: weatherData.current.wind_kph,
        };

        res.status(200).json(weatherInfo);
    } catch (error) {
        res.status(404).json({ message: 'Weather information not found for this specific city' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});