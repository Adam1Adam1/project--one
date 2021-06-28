const DOMAIN = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062'
const API_KEY = 'e6f94f6b65ef77aa228dfea577e80062'

const section = document.querySelector('.city-list')
let form =document.querySelector("form")
form.addEventListener('click', (e)=> {
e.preventDefault()
console.log(form)
function remove(){
  while(section.lastChild){
    section.removeChild(section.lastChild)
  }
}remove()
let input = document.querySelector('#blank')
function search (input){
    console.log(input.value)
    asyncGetData(input)
         
}
search(input)
})

 const  asyncGetData = async (input) => {
   
    try {
      const url= `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&APPID=e6f94f6b65ef77aa228dfea577e80062&e6f94f6b65ef77aa228dfea577e80062`
      const response = await axios.get(url)
      console.log(response.data.main)
      let cities =response.data.main
      
      function renderList(cities){
      const div = document.createElement('div')
      div.textContent = `${cities.temp}`
      section.appendChild(div)
      // const = document.createElement("p")
      // p.textContent = value.main["humitity"]
      // section.appendChild("p")
      }
        
    renderList(cities)
    return response

    }catch (error) {
        console.log(error)
          }   
        

            
      // function forcast(value){
      // const temp = document.createElement("p")
      // tempe.textContent = value.main["humitity"]
      // domContainer.appendChild(temperature)
      //   }
           
        
    
  

        
    


        
        
 }
