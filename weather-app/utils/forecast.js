const request = require("request")

const forecast = (latitude, longitude , callback) => {

    const url =
    "https://api.darksky.net/forecast/bcfd09a808c6aef8081290c4f8f57a9a/"+ encodeURIComponent(latitude) 
    + "," + encodeURIComponent(longitude) + "?units=si&lang=pt";

    request({ url, json: true }, (error, {body}) => {
        const {summary, temperature, precipProbability} = body.currently
    if (error) {
        callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
        callback("Unable to find location", undefined);
    } else {
        callback(undefined, 
        summary +
        "\nIt is currently " +
            temperature +
            " degrees outside. \n" +
            "There is a " +
            precipProbability +
            "% chance of rain.\n"
        );
    }
    });
}


module.exports = forecast