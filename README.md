# project--one
# Project Overview

## Project Name
 weather channel


## Project Description

Access current weather data for any location including over 200,000 cities
We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations
    
## API and Data Sample



https://openweathermap.org/api



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

## Wireframes
<img width="1440" alt="Screen Shot 2021-06-21 at 8 53 35 PM" src="https://user-images.githubusercontent.com/83483989/122846152-3db2ea00-d2d3-11eb-9f17-640fc0d7956f.png">


### MVP/PostMVP
-use Axios to makea request to the weather channel API
- Render data on page 
-Style using Flexbox
-implement responsive design 
-use a media query/breakpoint for deskcreens
- Allow user to choose channels

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|June 23| Pseudocode / actual code | Incomplete
|June 24| Initial Clickable Model  | Incomplete
|June 25| MVP | Incomplete
|June 28| Presentations | Incomplete

## Priority Matrix

![Screen Shot 2021-06-22 at 10 29 05 AM](https://user-images.githubusercontent.com/83483989/122943365-f5ccab00-d344-11eb-974c-b05cebfafac2.png)


## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| create basic HTML template | H | 5.5hrs| 3.5hrs | 3.5hrs |
| flexbox for search result | H | 3.5hrs| 3.5hrs | 3.5hrs |
| Working with API | H| 3hrs| 5.5hrs | 2.5hrs |
| create click event for search bar info | H | 3hrs| 3.5hrs | 3.5hrs |
| render weather info to page via DOM| H | 4hrs| 3.5hrs | 3.5hrs |
|  create remove result function| H | 2hrs| 3.5hrs | 3.5hrs |
| format photo appended to DOM| H | 3hrs| 3.5hrs | 3.5hrs |
| css color and fond styling| H | 4hrs| 3.5hrs | 3.5hrs |
| add icon to buttons | H | 3.5hrs| 3.5hrs | 3.5hrs |
| media query for desktop - search| H | 3hrs| 3.5hrs | 3.5hrs |
| | H | 3hrs| 3.5hrs | 3.5hrs |
| | H | 3hrs| 3.5hrs | 3.5hrs |
| | H | 3hrs| 3.5hrs | 3.5hrs |
| | H | 3hrs| 3.5hrs | 3.5hrs |

| Total | H | 36.5 hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description. 
function reverseString(str) {
   
    let splitString = str.split(""); // let splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    let reverseArray = splitString.reverse(); // let  reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
   let joinArray = reverseArray.join(""); // let joinArray = ["o", "l", "l", "e", "h"].join("");
   
     return joinArray; // "olleh"
}
 
reverseString("hello");

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
