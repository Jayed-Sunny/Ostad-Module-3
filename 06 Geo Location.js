// 6.Geolocation:
// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
// ---------------------------------------------------------------------------------------------------------------------------------
function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
  }
  
  function errorCallback(error) {
    console.log("Error retrieving location: " + error.message);
  }

  getCurrentLocation();
