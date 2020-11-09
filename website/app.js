/* Global Variables */
//all HTML calls by their IDs
const zip = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const postWJData = document.getElementById('entryHolder');
const genBtn = document.getElementById('generate');
const tempDiv = document.getElementById('temp');
const dateDiv = document.getElementById('date');
const conDiv = document.getElementById('content');
const ccDiv = document.getElementById('country-city');
const entryHolder = document.getElementById('entryHolder');
const iconImg = document.getElementById('icon');

//temp storage of the data to be sent
let postAllData = {};

//API call information
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=" + "e6dfde560301700e38bf99c2807bb36f";


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Generate Button calls the main function to get info and post it
genBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(baseURL, zip.value, apiKey);
    getPostData('http://localhost:5507/addWJEntry');
});

//Takes the API info and fetches the weather data and posting it to the server
const getWeather = async (base, zipCode, key) => {
    const res = await fetch(base + zipCode + key)
    try {
        const weatherData = await res.json();
        const tempAll = weatherData.main;
        const city = weatherData.name;
        const country = weatherData.sys.country;
        const weather = weatherData.weather;
        let feelslike = Math.round(tempAll.feels_like - 273.15);
        let tempC = Math.round(tempAll.temp - 273.15);
        let weather1 = weather[0].main;
        let icon1 = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";
        
        postAllData = {
            city: city, 
            country: country, 
            weather: weather1, 
            temprature: tempC,
            feelslike: feelslike, 
            wIcon: icon1,
            date: newDate, 
            content: feelings.value
        };

        postWeatherData('http://localhost:5507/addWJEntry',postAllData);
        
        return postAllData;
        
    } catch(error) {
        console.log("error", error);
    }
}

//posts the weather and feelings data to the server
const postWeatherData = async (url ='', data = {}) => {
    await fetch(url, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),         
      })
    .then((res) => res.json())
    .catch((err) => err);
    
}

//retrieves the server side data for the entry
const getPostData = async (url ='') => {
    const req = await fetch(url);
    try {
        const returnedData = await req.json();
        createWJDPost(returnedData);
    } catch(error) {
        console.log("error", error);
    }

}

//creates the HTML post based ont he post data object
const createWJDPost = (data) => {

    entryHolder.style.backgroundColor = "white";
    iconImg.src = data.wIcon;
    console.log(data.wIcon);

    tempDiv.innerText = `${data.weather}, ${data.temprature}  C\u00B0, Feels Like: ${data.feelslike} C\u00B0`;
    dateDiv.innerText = `Today's date: ${data.date}`;
    conDiv.innerText = `My Feelings about today: ${data.content}`;
    ccDiv.innerText = `${data.city}, ${data.country}`;
    
}


