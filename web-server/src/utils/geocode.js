const request = require('request')

const geocode = (address, callback) => {    
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + 
    ".json?access_token=pk.eyJ1IjoiZWdidWxzb25pIiwiYSI6ImNrMG9iZDh4bjAxYjAzZHIxcGM0NnBpbDgifQ.MDv2bvuB6UYhmfM_1H6O8w&limit=1"
    request({url, json: true}, (error, {body}) => {
      
      // const {center[1]: latitude, center[0]: longitude, place_name: location} = res
      if (error) {
        callback('Unable to connect to location services!', undefined)
      } else if (body.features.length === 0) {
        callback('Unable to find location. Try another search.', undefined)
      } else {

        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
          
        })
      }
    })
  }

  module.exports = geocode