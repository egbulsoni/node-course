const request = require("request");

const url =
  "https://api.darksky.net/forecast/bcfd09a808c6aef8081290c4f8f57a9a/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
