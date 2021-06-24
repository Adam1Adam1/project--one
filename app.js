const DOMAIN = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062"
const API_KEY = "e6f94f6b65ef77aa228dfea577e80062"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`
console.log(BASE_URL)

document.addEventListener("load",() => {
    let lon = document.createElement("lon")
    let lat = document.createElement("lat")
    let temperatureDegree = document.querySelector(".temperature-degree")
    let locationTimezone = document.querySelector(".location-timezone")
    longitude = document.querySelector("lon")
    latitude = document.querySelector("lat")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat =position.coords.latitude;

            temperature(data.currently);
           
            const weatherInfo = async() => {

                try {
                   const getWeatherData =`"http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062"${lon},${lat}`
                
                const response = await axios.get(getWeatherData)
                console.log(response)
                temperature = response.data.main.temperature
                
                console.log(temperature)
                }catch(error){
                    console.log(error)
                
                }
                }
            // const proxy = "https://cors-anywhere.herokuapp.com/";

            // const api =`${proxy}http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062/${lat},${lon}`;
            // fetch(api)
            // .then(response => {
            //     return response.json();
            // })
            //     .then(data => {
            //         console.log(data);
             
                })
            }
        })
        weatherInfo();

        function data(temperature){
            console.log(data);
        //    let WCImg=` http://openweathermap.org/img/wn/${icon}.png`
           temperature = document.createElement("temp")
          let weather = document.createElement("weather")
            // img.setAttribute("src",WCImg)
             temperature = document.querySelector("temp")
             weather = document.querySelector("weather")
             weather = data.weather.main;
            ".temp".append(temperature)
            ".weather".append(getWeatherData)
        


// const weatherInfo = async() => {

// try {
//    const getWeatherData ="http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062"

// const response = await axios.get(getWeatherData)
// console.log(response)
// temperature = response.data.main.temperature

// console.log(temperature)
// }catch(error){
//     console.log(error)

// }
// }
// weatherInfo();

let input = document.querySelector('.search-input')
let button = document.querySelector('.wc-button')

function search (){
    console.log(input.value)

// function data(temp){
//     console.log(data);
// //    let WCImg=` http://openweathermap.org/img/wn/${icon}.png`
//    temp = document.createElement("temp")
//   let weather = document.createElement("weather")
//     // img.setAttribute("src",WCImg)
//      temp = document.querySelector("temp")
//      weather = document.querySelector("weather")
//      weather = data.weather.main;
//     ".temp".append(temp)
//     ".weather".append(getWeatherData)

// }

}
// for( let i = 0; i< cities.length; i++){
//     const div = document.createElement('div')
//     div.textContent = `${WCtemp[i].Title}`
//     section.appendChild(div)}
        }