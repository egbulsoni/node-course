const request = require("request")

const forecast = (latitude, longitude , callback) => {

    const url =
    "https://api.darksky.net/forecast/bcfd09a808c6aef8081290c4f8f57a9a/"+ encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "?units=si&lang=pt";

    request({ url: url, json: true }, (error, response) => {
    if (error) {
        callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
        callback("Unable to find location", undefined);
    } else {
        callback(undefined, 
        response.body.currently.summary +
        "\nIt is currently " +
            response.body.currently.temperature +
            " degrees outside. \n" +
            "There is a " +
            response.body.currently.precipProbability +
            "% chance of rain.\n"
        );
    }
    });
}


module.exports = forecast