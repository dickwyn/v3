import axios from 'axios';
import SunCalc from 'suncalc';

const getSunriseSunset = () => {
  return axios
    .post(`https://geolocation-db.com/json/${process.env.GEOLOCATIONDB_API_KEY}`)
    .then(({ status, data: { latitude, longitude } }) => {
      if (status === 200) {
        const sunsetSunriseData = SunCalc.getTimes(new Date(), latitude, longitude);
        return {
          sunrise: `${sunsetSunriseData.sunrise.getHours()}:${sunsetSunriseData.sunrise.getMinutes()}`,
          sunset: `${sunsetSunriseData.sunset.getHours()}:${sunsetSunriseData.sunset.getMinutes()}`,
        };
      } else {
        return { error: `geolocationdb returned a ${status} status code` };
      }
    })
    .catch((error) => {
      return { error: error };
    });
};

export default getSunriseSunset;
