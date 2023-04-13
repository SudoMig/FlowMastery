const weather = {
  apikey: 'c2c0d71a5f39168c2108f4e7801b255d',
  fetchweather: function () {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Ottawa&units=metric&appid=' +
      this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
  },
  displayWeather: function (data) {
    const { temp } = data.main
    // console.log(temp);
    document.querySelector('.temp').innerText = 'Ottawa: ' + temp + '°C'
  }
}
weather.fetchweather()
