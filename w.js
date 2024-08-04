const apiKey = "4ec6f944d66ce924031b36f9aeb8880a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const serachBox = document.querySelector(".search input")
const serachBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const rep = await fetch(`${apiUrl}${city}&appid=${apiKey}`)

    if(rep.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else {
        let data = await rep.json()
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/images/clouds.png";
        }else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "/images/rain.png";
    
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "/images/drizzle.png";
    
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "/images/mist.png";
    
        }  else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "/images/clear.png";
    
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"

    }
   
}

serachBtn.addEventListener("click",()=>{
    checkWeather(serachBox.value)
})



// console.log([1,1,4,2,30].sort(function(a,b){
//     console.log(a)
//     return a - b
// }))

// function solution(nums){
//       nums.sort(function(a,b){
//       return a - b
//   })
//   }

// console.log(solution([1,2,8,13]))

// console.log([1,99,8,13].sort(function(a,b){
//     return a - b
// }))



// function arrayCounter (array) {
//     // if (typeof array === 'undefined', 'string', 'number'){
//     //     return 0;
//     // }
//       return array.sort(function(a,b){
//             return a - b
//         });
//   }


function solution(nums){

    if(nums == null){
        return []
    }
  
  
    return nums.sort(function(a,b){
               return a - b
           });
   }

  console.log(solution([]))