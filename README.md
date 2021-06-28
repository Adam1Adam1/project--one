
# Project Overview

## Project Name
 weather channel


## Project Description

user can search  current weather  base upon the city which they live in , user will be able to see the temprature associated icon and temperature degree  in fahreheit , remove previous result on new saerch.
    
## API and Data Sample


[api docs](https://openweathermap.org/api)

[request](http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6f94f6b65ef77aa228dfea577e80062)

[Screen Shot 2021-06-22 at 3 53 19 PM](https://user-images.githubusercontent.com/83483989/122991672-4eb33800-d373-11eb-92af-411c5fbfbee5.png)



```
"coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 285.79,
        "feels_like": 285.38,
        "temp_min": 284.43,
        "temp_max": 286.87,
        "pressure": 1017,
        "humidity": 87
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.24,
        "deg": 68,
        "gust": 6.26
    },
    "clouds": {
        "all": 75
    },
    "dt": 1624313556,
    "sys": {
        "type": 2,
        "id": 2019646,
        "country": "GB",
        "sunrise": 1624246986,
        "sunset": 1624306887
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
```

## Wireframes
<img width="1440" alt="Screen Shot 2021-06-21 at 8 53 35 PM" src="https://user-images.githubusercontent.com/83483989/122846152-3db2ea00-d2d3-11eb-9f17-640fc0d7956f.png">


### MVP/PostMVP
- put user input from the form and pass it to api 
- use Axios to makea request to the weather channel API
- Render icon, city ,weather condition , data on page 
- Style using Flexbox
- implement responsive design 
- remove previous search and append  new search result
 
#### PostMVP  

- Add second API
- Use local storage to save user favorites


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | complete
|June 23| Pseudocode / actual code | complete
|June 24| Initial Clickable Model  | complete
|June 25| MVP |complete
|June 28| Presentations | Incomplete

## Priority Matrix

![Screen Shot 2021-06-22 at 10 29 05 AM](https://user-images.githubusercontent.com/83483989/122943365-f5ccab00-d344-11eb-974c-b05cebfafac2.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| create basic HTML template | H | 5.5hrs| 3.5hrs | 3.5hrs |
| flexbox for search result | H | 3.5hrs| 3.5hrs | 3.5hrs |
| Working with API | H| 5hrs| 5.5hrs | 4.5hrs |
| create click event for search bar info | H | 3hrs| 3.5hrs | 3.5hrs |
| render weather info to page via DOM| H | 4hrs| 3.5hrs | 5.5hrs |
|  create remove result function| H | 4hrs| 3.5hrs | 4.5hrs |
| format photo appended to DOM| H | 3hrs| 3.5hrs | 4.5hrs |
| css color and fond styling| H | 4hrs| 3.5hrs | 6.5hrs |
| add icon to buttons | H | 3.5hrs| 3.5hrs | 3.5hrs |
| 
| Total | H | 39.5 hrs| 5hrs | 5hrs |

## Code Snippet



   
    
## Change Log

