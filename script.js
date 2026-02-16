
$(document).ready(function () {
    let date=new Date();
        document.getElementById("current").innerHTML=date;
        
});
 
function fun() {
  let city = document.getElementById("city").value.trim();
  let c=city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  const regex = /^[A-Za-z\s\-]+$/;

  if (city === "") {
    alert("Please enter a city name");
    return false;
  } else if (!regex.test(city)) {
    alert("Invalid city name format");
    return false;
  } else {
    document.getElementById("output").innerHTML = city.toUpperCase();
    getTimeByCity(c);
  }
}

const cityTimeZones = {
      "New York": "America/New_York",
      "Los Angeles": "America/Los_Angeles",
      "Chicago": "America/Chicago",
      "London": "Europe/London",
      "Paris": "Europe/Paris",
      "Berlin": "Europe/Berlin",
      "Rome": "Europe/Rome",
      "Moscow": "Europe/Moscow",
      "Dubai": "Asia/Dubai",
      "Tokyo": "Asia/Tokyo",
      "Beijing": "Asia/Shanghai",
      "Hong Kong": "Asia/Hong_Kong",
      "Singapore": "Asia/Singapore",
      "Sydney": "Australia/Sydney",
      "Melbourne": "Australia/Melbourne",
      "Toronto": "America/Toronto",
      "Mexico City": "America/Mexico_City",
      "São Paulo": "America/Sao_Paulo",
      "Johannesburg": "Africa/Johannesburg",
      "Cairo": "Africa/Cairo",
      "Kochi": "Asia/Kolkata",
      "Delhi": "Asia/Kolkata"
    };

function getTimeByCity(city) {                     
  const timeZone = cityTimeZones[city]; 
  if (timeZone) {
    const now = new Date();
    const options = {
      timeZone: timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    document.getElementById("date").innerHTML = `${now.toLocaleTimeString("en-US", options)}`;
  } else {
    document.getElementById("date").innerHTML = "❌ City not found";
  }
}