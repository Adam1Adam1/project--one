const DOMAIN = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062'
const API_KEY = 'e6f94f6b65ef77aa228dfea577e80062'



 
let input = document.querySelector('.search-input')
let button = document.querySelector('.button')
 document.addEventListener('click',(e) => {
    e.preventDefault()
    
}) 
function search (){
    console.log(input.value)
    getWeatherData(input)
}
   
    const getWeatherData = async (input) => {
   
    try {
      const url= `http://api.openweathermap.org/data/2.5/weather?q=${input.value},uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062`

      const response = await axios.get(url)
      console.log(response.data.search)
      let cities = response.data.search
      
      function renderList(cities){
      const section = document.querySelector('cities')
      
      function removeCityName() {
        // Using a for loop, loop through each of the city name and remove it from the page.
       for (let i = 0 ; i < cities.length ; i++){
        cities[i].remove()
            const div = document.createElement('div')
            div.textContent = `${cities[i].temperature}`
            section.appendChild(div)
       }
    }
    }

}catch (error) {
    console.error(error)
      }
      }
      
        
    
//             const image = document.createElement('img')
//             image.setAttribute('src',`${weather[i]}`)
//             div.appendChild(image)
//           }
    //  function removeCityName() {
    // // 3. Using a for loop, loop through each of the city name and remove it from the page.
    //  for (let i = 0 ; i < cities.length ; i++){
  
    // cities[i].remove()
    //   }
    // }
    //   renderList(cities)
    
    //   return response
      
        

    



    // let weather = document.createElement("weather")
    // let temperature = document.createElement(".temp")
    // let cities = document.createElement(".cities")
    //  temperature.addEventListener(click ,() => {
     
    //     temperatureDegree = document.querySelector(".temperature-degree")
    //  temperature = document.querySelector("temp")
    //  weather = document.querySelector("weather")
    //  weather = data.weather.main;
    // ".temp".append(temperature)
    // ".weather".append(getWeatherData

    


        
        
           
            // const weatherInfo = async() => {

            //     try {
            //        const getWeatherData =`"http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062"${lon},${lat}`
                
            //     const response = await axios.get(getWeatherData)
            //     console.log(response)
            //     temperature = response.data.main.temperature
                
            //     console.log(temperature)
            //     }catch(error){
            //         console.log(error)
                
                // }
                // }
            // const proxy = "https://cors-anywhere.herokuapp.com/";

            // const api =`${proxy}http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062/${lat},${lon}`;
            // fetch(api)
            // .then(response => {
            //     return response.json();
            // })
            //     .then(data => {
            //         console.log(data);
             
                
            
        
        // weatherInfo();

        // function data(temperature){
        //     console.log(data);
        // //    let WCImg=` http://openweathermap.org/img/wn/${icon}.png`
           
          
        //     // img.setAttribute("src",WCImg)
        //      temperature = document.querySelector("temp")
        //      weather = document.querySelector("weather")
        //      weather = data.weather.main;
        //     ".temp".append(temperature)
        //     ".weather".append(getWeatherData)
        


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

// let input = document.querySelector('.search-input')
// let button = document.querySelector('.wc-button')

// function search (){
//     console.log(input.value)

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


// for( let i = 0; i< cities.length; i++){
//     const div = document.createElement('div')
//     div.textContent = `${WCtemp[i].Title}`
//     section.appendChild(div)}
      