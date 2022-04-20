"use strict";

let cityNames = ["Vancouver", "Calgary", "Winnipeg", "Sault St. Marie",
 "Montreal", "Seattle", "Boston", "Helena", "Duluth", "Toronto",
  "Portland", "New York", "Pittsburgh", "Chicago", "Omaha",
   "Salt Lake City", "Denver", "Kansas City", "Saint Louis",
    "Washington", "San Francisco", "Nashville", "Raleich",
     "Charleston", "Atlanta", "Little Rock", "Oklahoma City",
      "Santa Fe", "Las Vegas", "Los Angeles", "Phoenix", "El Paso",
       "Dallas", "Houston", "New Orleans", "Miami"]

function randomCityName(){
    return cityNames[parseInt(Math.random() * cityNames.length)]
}

function twoCityNames(){
    let city_1 
    let city_2 
    do {
        city_1 = randomCityName()
        city_2 = randomCityName()  
        
    } while (city_1 == city_2);
    return city_1 + " : " + city_2
}

function pickThreeCityPairs(){
    let s = ""
    for (let index = 0; index < 3; index++) {
        s += twoCityNames() + "\n"
    }
    return s
}

function pickFiveCityPairs(){
    let s = ""
    for (let index = 0; index < 5; index++) {
        s += twoCityNames() + "\n"
    }
    return s
}

console.log(pickFiveCityPairs())