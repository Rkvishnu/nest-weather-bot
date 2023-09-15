import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  async getWeatherForCity(city: string): Promise<string> {
    try {
      const api_key = 'c64c870aaf174a059aaa19f535ff5d22';

      const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${api_key}`;
      const response = await axios.get(url);
      const weather = response.data.data[0].temp;
      // return weather;
      return `Weather in ${city}:  Temperature: ${weather.temp_c}°C`;
    } catch (error) {
      // throw new Error(`Unable to fetch weather data for ${city}`);
      throw new Error(error.message);

      console.log(error.message)
    }
  }
}
