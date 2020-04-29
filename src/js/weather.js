function success(pos) {
  const WEATHER_API_KEY = "4ac852164f5dd15fd41e5b16bc335ec2";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("data : ", data);
    })
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}
