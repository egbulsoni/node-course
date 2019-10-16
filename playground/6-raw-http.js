const https = require('https')
const url = "https://api.darksky.net/forecast/bcfd09a808c6aef8081290c4f8f57a9a/40,-75?units=si&lang=pt";

const request = https.request(url, (response) => {

    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', () => {
    console.log('An error', error)
})

request.end()