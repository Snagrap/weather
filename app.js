document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city){
	var key = "a6e7cf1127ed1dde18d06df7b57d7c7b";
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
	return resp.json()
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function() {
		//catch any errors
	});
}

function cityWeather(e){
	weatherDataFetch("Tallinn");
}