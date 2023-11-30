function refreshWeather(response) {
  let bodyElement = document.body;
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  let feelsLikeElement = document.querySelector("#feels_like");
  let longitudeElement = document.querySelector("#longitude");
  let latitudeElement = document.querySelector("#latitude");
  let suggestionElement = document.querySelector("#suggestion");
  let iconDescriptionElement = response.data.condition.icon;
  let clearSkyDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/415/original/grooveland-designs-zjoydJb17mE-unsplash.jpg?1701351150")';
  let clearSkyNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/417/original/redd-f-5CPIzjWzGxo-unsplash.jpg?1701352914")';
  let fewCloudsDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/421/original/wolf-zimmermann-6sf5rf8QYFE-unsplash_%282%29.jpg?1701354314")';
  let fewCloudsNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/424/original/ali-choubin-aO-Wq5CV0z8-unsplash.jpg?1701354815")';
  let scatteredCloudsDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/426/original/roberto-sorin-w5AIBOeo9Uo-unsplash.jpg?1701355464")';
  let scatteredCloudsNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/427/original/aral-tasher-njMi2OFoQqQ-unsplash.jpg?1701355721")';
  let brokenCloudsDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/429/original/tim-oliver-metz-glFocUiIyWo-unsplash.jpg?1701356115")';
  let brokenCloudsNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/430/original/anandu-vinod-pbxwxwfI0B4-unsplash.jpg?1701356375")';
  let showerRainDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/433/original/nick-nice-ve-R7PCjJDk-unsplash.jpg?1701356693")';
  let showerRainNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/432/original/valentin-muller-bWtd1ZyEy6w-unsplash.jpg?1701356668")';
  let rainDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/435/original/inge-maria-pv2ZlDfstXc-unsplash.jpg?1701357295")';
  let rainNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/434/original/eutah-mizushima-F-t5EpfQNpk-unsplash.jpg?1701357234")';
  let thunderstormDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/441/original/raychel-sanner-1cJXplTxrmI-unsplash.jpg?1701357734")';
  let thunderstormNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/439/original/melody-p-wFN9B3s_iik-unsplash.jpg?1701357654")';
  let snowDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/443/original/chandler-cruttenden-kM1p1c1q8qo-unsplash.jpg?1701358190")';
  let snowNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/444/original/william-topa-dG8d8JYnnvA-unsplash.jpg?1701358410")';
  let mistDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/445/original/ricardo-gomez-angel-jg4pkrwaico-unsplash.jpg?1701358560")';
  let mistNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/447/original/sasha-matic-kfv9sfd4gDk-unsplash.jpg?1701358807")';

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  speedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
  feelsLikeElement.innerHTML = `${Math.round(
    response.data.temperature.feels_like
  )}°`;
  longitudeElement.innerHTML = response.data.coordinates.longitude;
  latitudeElement.innerHTML = response.data.coordinates.latitude;

  if (iconDescriptionElement === "clear-sky-day" && temperature > 30) {
    suggestionElement.innerHTML = "🥵 alert 🚨 Drink 💧 and wear 🕶️ & 🧴!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (iconDescriptionElement === "clear-sky-day" && temperature === 20) {
    suggestionElement.innerHTML =
      "Enjoy the perfect weather, you deserve it!😎";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (iconDescriptionElement === "clear-sky-day" && temperature < 10) {
    suggestionElement.innerHTML =
      "Beautiful but 🥶, make sure to keep yourself warm!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  }

  if (iconDescriptionElement === "clear-sky-night" && temperature > 30) {
    suggestionElement.innerHTML =
      "Nope, you can't spend the night inside the refrigerator...but I get you 🥵";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "🥵 Make sure you stay hydrated 💧!!";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (iconDescriptionElement === "clear-sky-day" && temperature === 20) {
    suggestionElement.innerHTML = "Such a wonderful night, enjoy it!";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (
    iconDescriptionElement === "clear-sky-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (
    iconDescriptionElement === "clear-sky-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (iconDescriptionElement === "clear-sky-night" && temperature < 10) {
    suggestionElement.innerHTML =
      "It's beautiful outside but don't you prefer to stay in tonight? 🥶";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  }

  if (iconDescriptionElement === "few-clouds-day" && temperature > 30) {
    suggestionElement.innerHTML =
      "🥵 At least the cloud help with the shade! Don't forget 💧 & 🕶️";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "Almost perfect weather, enjoy! 😎";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (iconDescriptionElement === "few-clouds-day" && temperature < 10) {
    suggestionElement.innerHTML =
      "Beautiful but 🥶, make sure to keep yourself warm!";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  }

  if (iconDescriptionElement === "few-clouds-night" && temperature > 30) {
    suggestionElement.innerHTML = "🥵🥵🥵";
    bodyElement.style.backgroundImage = fewCloudsNightImage;
  } else if (
    iconDescriptionElement === "few-clouds-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "I know, hell is here...🥵";
    bodyElement.style.backgroundImage = fewCloudsNightImage;
  } else if (
    iconDescriptionElement === "few-clouds-night" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "An almost perfect night, enjoy!";
    bodyElement.style.backgroundImage = fewCloudsNightImage;
  } else if (
    iconDescriptionElement === "few-clouds-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = fewCloudsNightImage;
  } else if (
    iconDescriptionElement === "few-clouds-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = fewCloudsNightImage;
  } else if (
    iconDescriptionElement === "few-clouds-night" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML = "Make sure to keep yourself warm! 🔥";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  }

  if (iconDescriptionElement === "scattered-clouds-day" && temperature > 30) {
    suggestionElement.innerHTML =
      "🥵 At least the cloud help with the shade! Don't forget 💧 & 🕶️";
    bodyElement.style.backgroundImage = scatteredCloudsDayImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    bodyElement.style.backgroundImage = scatteredCloudsDayImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-day" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "🕶️ are a must today!";
    bodyElement.style.backgroundImage = scatteredCloudsDayImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = scatteredCloudsDayImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = scatteredCloudsDayImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-day" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML =
      "Beautiful but 🥶, make sure to keep yourself warm!";
    bodyElement.style.backgroundImage = scatteredCloudsDayImage;
  }

  if (iconDescriptionElement === "scattered-clouds-night" && temperature > 30) {
    suggestionElement.innerHTML = "🥵🥵🥵";
    bodyElement.style.backgroundImage = scatteredCloudsNightImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "I know, hell is here...🥵";
    bodyElement.style.backgroundImage = scatteredCloudsNightImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-night" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "An almost perfect night, enjoy!";
    bodyElement.style.backgroundImage = scatteredCloudsNightImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = scatteredCloudsNightImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = scatteredCloudsNightImage;
  } else if (
    iconDescriptionElement === "scattered-clouds-night" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML = "Make sure to keep yourself warm! 🔥";
    bodyElement.style.backgroundImage = scatteredCloudsNightImage;
  }

  if (iconDescriptionElement === "broken-clouds-day" && temperature > 30) {
    suggestionElement.innerHTML = "🥵 Too hot...and it's not even sunny...😡";
    bodyElement.style.backgroundImage = brokenCloudsDayImage;
  } else if (
    iconDescriptionElement === "broken-clouds-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "🥵🥵🥵";
    bodyElement.style.backgroundImage = brokenCloudsDayImage;
  } else if (
    iconDescriptionElement === "broken-clouds-day" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "🫤🫤!";
    bodyElement.style.backgroundImage = brokenCloudsDayImage;
  } else if (
    iconDescriptionElement === "broken-clouds-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = brokenCloudsDayImage;
  } else if (
    iconDescriptionElement === "broken-clouds-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = brokenCloudsDayImage;
  } else if (
    iconDescriptionElement === "broken-clouds-day" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML =
      "Beautiful but 🥶, make sure to keep yourself warm!";
    bodyElement.style.backgroundImage = brokenCloudsDayImage;
  }

  if (iconDescriptionElement === "broken-clouds-night" && temperature > 30) {
    suggestionElement.innerHTML = "🥵🥵🥵";
    bodyElement.style.backgroundImage = brokenCloudsNightImage;
  } else if (
    iconDescriptionElement === "broken-clouds-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "I know, this is hell...🥵";
    bodyElement.style.backgroundImage = brokenCloudsNightImage;
  } else if (
    iconDescriptionElement === "broken-clouds-night" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "An almost perfect night, enjoy!";
    bodyElement.style.backgroundImage = brokenCloudsNightImage;
  } else if (
    iconDescriptionElement === "broken-clouds-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = brokenCloudsNightImage;
  } else if (
    iconDescriptionElement === "broken-clouds-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤";
    bodyElement.style.backgroundImage = brokenCloudsNightImage;
  } else if (
    iconDescriptionElement === "broken-clouds-night" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML = "Make sure to keep yourself warm! 🔥";
    bodyElement.style.backgroundImage = brokenCloudsNightImage;
  }

  if (iconDescriptionElement === "shower-rain-day" && temperature > 30) {
    suggestionElement.innerHTML = "Tropical storm? 🥵💧";
    bodyElement.style.backgroundImage = showerRainDayImage;
  } else if (
    iconDescriptionElement === "shower-rain-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "Perfect temperature but...🫤";
    bodyElement.style.backgroundImage = showerRainDayImage;
  } else if (
    iconDescriptionElement === "shower-rain-day" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "☂️☂️!";
    bodyElement.style.backgroundImage = showerRainDayImage;
  } else if (
    iconDescriptionElement === "shower-rain-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget 🧥 & ☂️!";
    bodyElement.style.backgroundImage = showerRainDayImage;
  } else if (
    iconDescriptionElement === "shower-rain-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    bodyElement.style.backgroundImage = showerRainDayImage;
  } else if (iconDescriptionElement === "shower-rain-day" && temperature < 10) {
    suggestionElement.innerHTML = "Better stay inside today!";
    bodyElement.style.backgroundImage = showerRainDayImage;
  }

  if (iconDescriptionElement === "shower-rain-night" && temperature > 30) {
    suggestionElement.innerHTML = "Tropical storm? 🥵💧";
    bodyElement.style.backgroundImage = showerRainNightImage;
  } else if (
    iconDescriptionElement === "shower-rain-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "Perfect temperature but...🫤";
    bodyElement.style.backgroundImage = showerRainNightImage;
  } else if (
    iconDescriptionElement === "shower-rain-night" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "☂️☂️!";
    bodyElement.style.backgroundImage = showerRainNightImage;
  } else if (
    iconDescriptionElement === "shower-rain-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget 🧥 & ☂️!";
    bodyElement.style.backgroundImage = showerRainNightImage;
  } else if (
    iconDescriptionElement === "shower-rain-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    bodyElement.style.backgroundImage = showerRainNightImage;
  } else if (
    iconDescriptionElement === "shower-rain-night" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML = "Better stay inside today!";
    bodyElement.style.backgroundImage = showerRainNightImage;
  }

  if (iconDescriptionElement === "rain-day" && temperature > 30) {
    suggestionElement.innerHTML = "Tropical storm? 🥵💧";
    bodyElement.style.backgroundImage = rainDayImage;
  } else if (
    iconDescriptionElement === "rain-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "Perfect temperature but...🫤";
    bodyElement.style.backgroundImage = rainDayImage;
  } else if (iconDescriptionElement === "rain-day" && temperature === 20) {
    suggestionElement.innerHTML = "☂️☂️☂️!";
    bodyElement.style.backgroundImage = rainDayImage;
  } else if (
    iconDescriptionElement === "rain-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget 🧥 & ☂️!";
    bodyElement.style.backgroundImage = rainDayImage;
  } else if (
    iconDescriptionElement === "rain-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    bodyElement.style.backgroundImage = rainDayImage;
  } else if (iconDescriptionElement === "rain-day" && temperature < 10) {
    suggestionElement.innerHTML = "Better stay inside today!";
    bodyElement.style.backgroundImage = rainDayImage;
  }

  if (iconDescriptionElement === "rain-night" && temperature > 30) {
    suggestionElement.innerHTML = "Tropical storm? 🥵💧";
    bodyElement.style.backgroundImage = rainNightImage;
  } else if (
    iconDescriptionElement === "rain-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "Perfect temperature but...🫤";
    bodyElement.style.backgroundImage = rainNightImage;
  } else if (iconDescriptionElement === "rain-night" && temperature === 20) {
    suggestionElement.innerHTML = "☂️☂️☂️!";
    bodyElement.style.backgroundImage = rainNightImage;
  } else if (
    iconDescriptionElement === "rain-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget 🧥 & ☂️!";
    bodyElement.style.backgroundImage = rainNightImage;
  } else if (
    iconDescriptionElement === "rain-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    bodyElement.style.backgroundImage = rainNightImage;
  } else if (iconDescriptionElement === "rain-night" && temperature < 10) {
    suggestionElement.innerHTML = "Better stay inside today!";
    bodyElement.style.backgroundImage = rainNightImage;
  }

  if (iconDescriptionElement === "thunderstorm-day" && temperature > 30) {
    suggestionElement.innerHTML = "...Ok...maybe we get out tomorrow?";
    bodyElement.style.backgroundImage = thunderstormDayImage;
  } else if (
    iconDescriptionElement === "thunderstorm-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "Netflix and chill?";
    bodyElement.style.backgroundImage = thunderstormDayImage;
  } else if (
    iconDescriptionElement === "thunderstorm-day" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "☂️☂️☂️!";
    bodyElement.style.backgroundImage = thunderstormDayImage;
  } else if (
    iconDescriptionElement === "thunderstorm-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget 🧥 & ☂️!";
    bodyElement.style.backgroundImage = thunderstormDayImage;
  } else if (
    iconDescriptionElement === "thunderstorm-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    bodyElement.style.backgroundImage = thunderstormDayImage;
  } else if (
    iconDescriptionElement === "thunderstorm-day" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML = "Better stay inside today!";
    bodyElement.style.backgroundImage = thunderstormDayImage;
  }

  if (iconDescriptionElement === "thunderstorm-night" && temperature > 30) {
    suggestionElement.innerHTML = "...Ok...maybe we get out tomorrow?";
    bodyElement.style.backgroundImage = thunderstormNightImage;
  } else if (
    iconDescriptionElement === "thunderstorm-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "Netflix and chill?";
    bodyElement.style.backgroundImage = thunderstormNightImage;
  } else if (
    iconDescriptionElement === "thunderstorm-night" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "☂️☂️☂️!";
    bodyElement.style.backgroundImage = thunderstormNightImage;
  } else if (
    iconDescriptionElement === "thunderstorm-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Do you really need to get out tonight? 🤔";
    bodyElement.style.backgroundImage = thunderstormNightImage;
  } else if (
    iconDescriptionElement === "thunderstorm-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    bodyElement.style.backgroundImage = thunderstormNightImage;
  } else if (
    iconDescriptionElement === "thunderstorm-night" &&
    temperature < 10
  ) {
    suggestionElement.innerHTML = "Better stay inside today!";
    bodyElement.style.backgroundImage = thunderstormNightImage;
  }

  if (iconDescriptionElement === "snow-day" && temperature < 10) {
    suggestionElement.innerHTML = "☃️ ❄️ 🏂 🎿 🏂!";
    bodyElement.style.backgroundImage = snowDayImage;
  }

  if (iconDescriptionElement === "snow-night" && temperature < 10) {
    suggestionElement.innerHTML =
      "Good night, hope you are in a warm place! ☃️";
    bodyElement.style.backgroundImage = snowNightImage;
  }

  if (iconDescriptionElement === "mist-day") {
    suggestionElement.innerHTML =
      "Are you driving today? Make sure to 👀 and slow down 🐢";
    bodyElement.style.backgroundImage = mistDayImage;
  }

  if (iconDescriptionElement === "mist-night") {
    suggestionElement.innerHTML =
      "Are you driving tonight? Make sure to 👀 and slow down 🐢";
    bodyElement.style.backgroundImage = mistNightImage;
  }

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "e52093t32d4f473a570bb10aoa2ca4e0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

function forecastDay(timestamp) {
  let currentDate = new Date(timestamp * 1000);
  let nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[nextDay.getDay()];
}

function getForecast(city) {
  let apiKey = "e52093t32d4f473a570bb10aoa2ca4e0";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
                <div class="row">
                    <div class="class-2">
                        <div class="forecast-date">
                            ${forecastDay(day.time)}
                        </div>
                        <img src="${day.condition.icon_url}" width="42px" //>
                        <div class="forecast-temperature">

                            <span class="maximum-temp">
                                ${Math.round(day.temperature.maximum)}°
                            </span>

                            <span class="minimum-temp">
                                ${Math.round(day.temperature.minimum)}°
                            </span>
                        </div>
                    </div>
                </div>
                `;
    }
  });

  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Barcelona");
