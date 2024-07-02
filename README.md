# WeatherAppAPI

To implement the RESTful API for the weather app using WeatherAPI.com, follow these step-by-step instructions in your VS Code terminal:

### Step 1: Project Setup

1. **Create a New Directory:**
   ```
   mkdir WeatherAppAPI
   cd WeatherAppAPI
   ```

### Step 2: Set Up Your Environment

2. **Initialize a New Node.js Project (Optional if using Node.js):**
   ```
   npm init -y
   ```

3. **Install Necessary Packages:**
   Depending on your chosen programming language, install packages to make HTTP requests and handle JSON responses. For Node.js, you might use `axios` or `node-fetch`.
   ```
   npm install axios
   ```

### Step 3: Obtain WeatherAPI.com API Key

4. **Sign Up for WeatherAPI.com:**
   Sign up for a free account at [WeatherAPI.com](https://www.weatherapi.com/) to obtain your API key.

### Step 4: Implement the API Endpoint

5. **Create a New File for Your API Endpoint:**
   For example, `app.js` if using Node.js.

6. **Write Your API Endpoint:**
   Below is an example for Node.js using `axios`:

   ```javascript
   // app.js

   const express = require('express');
   const axios = require('axios');
   const app = express();

   const API_KEY = 'YOUR_WEATHERAPI_KEY';

   app.get('/weather', async (req, res) => {
       const { city } = req.query;
       try {
           const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
           const weatherData = {
               cityName: response.data.location.name,
               temperature: response.data.current.temp_c,
               condition: response.data.current.condition.text,
               humidity: response.data.current.humidity,
               windSpeed: response.data.current.wind_kph
           };
           res.status(200).json(weatherData);
       } catch (error) {
           console.error(error);
           res.status(404).json({ message: 'Weather information not found for the specified city.' });
       }
   });

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

### Step 5: Documentation

7. **Write API Documentation:**
   Create a `README.md` file describing your API:

   ```markdown
   # Weather App API

   ## Overview
   This API retrieves weather information for a specific city using WeatherAPI.com.

   ## API Endpoint
   - **GET /weather**
     - Query parameter: `city` (name of the city)
     - Response: JSON object with weather information including city name, temperature, weather condition, humidity, and wind speed.

   ## Setup Instructions
   1. Clone this repository.
   2. Install dependencies: `npm install`
   3. Obtain an API key from WeatherAPI.com.
   4. Start the server: `node app.js`

   ## API Key
   Sign up for a free account at WeatherAPI.com to obtain your API key.

   ## Testing
   Use tools like Postman or cURL to test the API endpoint:

   Example cURL command:
   ```
   curl http://localhost:3000/weather?city=London
   ```

   ## Error Handling
   - If the city is not found, the API returns a 404 status with an error message.

   ```

### Step 6: Test Your API

8. **Test Your API Endpoint:**
   Use Postman or cURL to test your API endpoint with different cities to ensure it functions correctly.

### Step 7: Submission

9. **Organize Your Project:**
   Organize your source code (`app.js`), documentation (`README.md`), and any testing files.

10. **Compress Project Directory:**
    ```
    zip -r WeatherAppAPI.zip .
    ```
    This creates a ZIP file of your entire project directory.

### Final Notes

- Ensure your API key is kept secure and not exposed in your source code repository.
- Follow best practices for error handling, documentation, and API design.
- Submit the `WeatherAppAPI.zip` file as per your assignment guidelines.

This guide covers the basic steps to set up and implement the Weather App API using Node.js as an example. Adjust the steps according to your chosen programming language if different.
