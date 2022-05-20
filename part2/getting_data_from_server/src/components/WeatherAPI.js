import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ latlng }) => {
  const [capitalWeather, setCapitalWeather] = useState();

  useEffect(() => {
    if (latlng) {
      axios
        .get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latlng[0]}&lon=${latlng[1]}`)
        .then((response) => setCapitalWeather(response.data))
        .catch((error) => console.log(error));
    }
  }, [latlng]);

  if (!capitalWeather || !latlng) return <div>Weather in capital not available.</div>;

  const currentTemperature = capitalWeather.properties.timeseries[0].data.instant.details.air_temperature;
  const currentWindSpeed = capitalWeather.properties.timeseries[0].data.instant.details.wind_speed;

  return (
    <div>
      <p>Temperature: {currentTemperature} Celcius</p>
      <p>Wind: {currentWindSpeed} m/s</p>
    </div>
  );
};

export default Weather;
