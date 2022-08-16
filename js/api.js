
export const getWeatherData = async (city) => {
   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=861a63e9892b8a2fd8fef4e5c4a21b61&lang=ru&units=metric`);

      return await response.json();
   } catch (error) {
      console.error(error);
   }
}