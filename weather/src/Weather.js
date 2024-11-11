import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = '99cad6718e55a264e026f8c8a9f6ff84';  

    const fetchWeather = async () => {
        try {
            setError(null);
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            
            setWeatherData(response.data);
        } catch (err) {
            setError("City not found. Please try again.");
        }
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        if (city) {
            fetchWeather();
        }
    };

    return (
        <div style={styles.container}>
            <h2>Weather App</h2>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleInputChange}
                style={styles.input}
            />
            <button onClick={handleSearch} style={styles.button}>Search</button>

            {error && <p style={styles.error}>{error}</p>}

            {weatherData && (
                <div style={styles.result}>
                    <h3>{weatherData.name}</h3>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: { maxWidth: '400px', margin: '20px auto', textAlign: 'center' },
    input: { padding: '10px', fontSize: '16px', width: '80%', margin: '10px 0' },
    button: { padding: '10px', fontSize: '16px', cursor: 'pointer' },
    error: { color: 'red', marginTop: '10px' },
    result: { marginTop: '20px', background: '#f0f0f0', padding: '15px', borderRadius: '8px' },
};

export default Weather;
