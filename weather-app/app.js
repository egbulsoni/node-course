const request = require("request");

const url =
  "https://api.darksky.net/forecast/bcfd09a808c6aef8081290c4f8f57a9a/37.8267,-122.4233?units=si&lang=pt";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      "It is currently " +
        response.body.currently.temperature +
        " degrees outside. " +
        "There is a " +
        response.body.currently.precipProbability +
        "% chance of rain." +
        response.body.currently.summary
    );
  }
});

const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWdidWxzb25pIiwiYSI6ImNrMG9iZDh4bjAxYjAzZHIxcGM0NnBpbDgifQ.MDv2bvuB6UYhmfM_1H6O8w&limit=1";
request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to geo service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find Lat/Long, try again.");
  } else {
    console.log(
      "Lat: " +
        response.body.features[0].center[0] +
        "\nLong: " +
        response.body.features[0].center[1]
    );
  }
});

// Geocoding

// address -> lat/long -> weather

// chrome extension "JSON formatter"
