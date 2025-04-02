// function fetchWeather() {
// 	fetch(URL)
// 		.then(function (response) {
// 			if (response.ok) {
// 				return response.json()
// 			}
// 			throw new Error("Network response was not ok.")
// 		})
// 		.then(function (data) {
// 			console.log(data)
// 			var city = data.location.name
// 			var temp = data.current.temp_c
// 			var icon = data.current.condition.icon
// 			var wind = data.current.wind_kph
// 			var humidity = data.current.humidity
// 			var uv = data.current.uv
// 			var feelslike = data.current.feelslike_c

// 			document.querySelector(".card-title").textContent = city
// 			//document.querySelector(".card-text").textContent = condition
// 			document.querySelector(".card-img").src = icon
// 			document.querySelectorAll(".list-group-item")[0].textContent =
// 				"Temperature: " + temp + "°C"
// 			document.querySelectorAll(".list-group-item")[1].textContent =
// 				"Humidity: " + humidity + "%"
// 			document.querySelectorAll(".list-group-item")[2].textContent =
// 				"Feels like: " + feelslike + "°C"
// 			document.querySelectorAll(".list-group-item")[3].textContent =
// 				"Wind: " + wind + " km/h"
// 			document.querySelectorAll(".list-group-item")[4].textContent = "UV: " + uv
// 		})
// 		.catch(function (error) {
// 			console.error("Fetch error:", error)
// 		})
// }

import { API_KEY } from './config.js';

export const fetchWeather = async (city = "Paris") => {
	const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

	try {
		const response = await fetch(URL);
		if (!response.ok) throw new Error("Network response was not ok.");
		const data = await response.json();
		console.log(data);

		const {
			location: { name: cityName },
			current: { temp_c: temp, condition, wind_kph: wind, humidity, uv, feelslike_c: feelslike }
		} = data;

		document.querySelector(".card-title").textContent = cityName;
		document.querySelector(".card-img").src = condition.icon;
		const listItems = document.querySelectorAll(".list-group-item");

		listItems[0].textContent = `Temperature: ${temp}°C`;
		listItems[1].textContent = `Humidity: ${humidity}%`;
		listItems[2].textContent = `Feels like: ${feelslike}°C`;
		listItems[3].textContent = `Wind: ${wind} km/h`;
		listItems[4].textContent = `UV: ${uv}`;
	} catch (error) {
		console.error("Fetch error:", error);
    }
};
