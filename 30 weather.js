const apiKey = '39319192e56b31c56d9b4bcd117080e9';
const city = 'Bengaluru';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const fullinfo=data
    console.log(fullinfo)
    const temperatureCelsius = data.main.temp;
    const tempC = `${temperatureCelsius}°C`;
    console.log(tempC)
    const place=data.name
    const country=data.sys.country
    const locate=`${place},${country}`
    console.log(locate)
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const displayInfo = `${currentDate} ,${currentTime}`;
    console.log(displayInfo)
    const weather=data.weather[0].main
    console.log(weather)
    const tempmin = data.main.temp_min;
    const tempmax = data.main.temp_max;
    const tempminmax = `${tempmin}°C/${tempmax}°C`;
    console.log(tempminmax)
    document.getElementById("location").innerHTML = locate;
    document.getElementById("time").innerHTML = displayInfo;
    document.getElementById("temperature").innerHTML = tempC;
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("tempminmax").innerHTML = tempminmax;
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
